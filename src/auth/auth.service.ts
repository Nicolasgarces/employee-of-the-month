import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { RegisterDto } from './dto/register.dto';
import * as bcryptjs from 'bcrypt'
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService {
  // al importar el "service" se está llamando el archivo, pero 
  // cuando importamos el "Repositorio" ahí si vamos directo a la db
  constructor(private readonly  userService: UserService,
  private jwtService: JwtService){}
  
  async register({idPerson, email, password, idRole}: RegisterDto) {

    const user = await this.userService.findOneByEmail(email)
    if (user) {
      throw new BadRequestException('User already exists')
    }
    return await this.userService.createUser({
      idPerson,
      email,
      idRole,
      password: await bcryptjs.hash(password, 10) //encripta la password
    });
  }

  async login({email, password,}: LoginDto) {
    const user = await this.userService.findOneByEmail(email)
    if(!user){
      throw new UnauthorizedException('Invalid Credencials');
    }
    const isPasswordvalid = await bcryptjs.compare(password, user.password)
    if(!isPasswordvalid){
      throw new UnauthorizedException('Invalid Credencials');
    }
    const payload = {email: user.email, idRole: user.idRole};

    const token = await this.jwtService.signAsync(payload)
    return {
      token,
      email,
          };
  }
}
