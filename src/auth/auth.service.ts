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
    await this.userService.createUser({
      idPerson,
      email,
      idRole,
      password: await bcryptjs.hash(password, 10) //encripta la password
    });
    return {
      idPerson,
      email,
      idRole
    }
  }

  async login({email, password,}: LoginDto) {
    const user = await this.userService.findByEmailWithPassword(email)
    if(!user){
      throw new UnauthorizedException('Invalid Credencials');
    }
    const isPasswordvalid = await bcryptjs.compare(password, user.password)
    if(!isPasswordvalid){
      throw new UnauthorizedException('Invalid Credencials');
    }
    const payload = {idPerson: user.idPerson, email: user.email, idRole: user.idRole};
    const token = await this.jwtService.signAsync(payload)
    return {
      token,
      email,
          };
  }
  async profile({ email, idRole }: { email: string; idRole: number }) {
    return await this.userService.findOneByEmail(email);
  }
}
