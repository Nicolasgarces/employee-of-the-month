import { Body, Controller, Get, HttpException, HttpStatus, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserService } from 'src/user/user.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { AuthGuard } from './guard/auth.guard';
import { Request } from 'express';
import { Roles } from './decorators/roles.decorator';
import { RolesGuard } from './guard/roles.guard';
import { idRole } from './enums/rol.enums';
import { Auth } from './decorators/auth.decorators';
import { User } from '../user/entities/user.entity';


interface RequestWithUser extends Request {
  user: { email: string; idRole: number; idPerson: number };
}


@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService,
              private readonly userService: UserService
    ) {}
  
  @Post('register')
  register(@Body() registerDto: RegisterDto) {
    
    return this.authService.register(registerDto);
  }

  @Post('login')
  login(@Body()loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }


  @Get('profile')
  @Auth(idRole.Admin)
  profile(@Req() req: RequestWithUser
  ) {
    return req.user;
  }

  // @Get('profile')
  // @Auth(idRole.SuperAdmin)
  // async profile(@Req() req: RequestWithUser): Promise<any> {
  //   try {
  //     const user = await this.userService.findOneByEmail(req.user.email); // Obtener información adicional del usuario si es necesario
      
  //     // Aquí puedes adaptar la respuesta según el rol del usuario
  //     switch (req.user.idRole) {
  //       case idRole.SuperAdmin:
  //         // Lógica específica para SuperAdmin
  //         return {
  //           message: '¡Bienvenido SuperAdmin!',
  //           user: user
  //         };
  //       case idRole.Admin:
  //         // Lógica específica para Admin
  //         return {
  //           message: '¡Bienvenido Admin!',
  //           user: user
  //         };
  //       case idRole.User:
  //         // Lógica específica para User
  //         return {
  //           message: '¡Bienvenido User!',
  //           user: user
  //         };
  //       default:
  //         throw new Error('Rol no reconocido');
  //     }
  //   } catch (error) {
  //     // Manejo de errores
  //     throw new HttpException('Error al obtener el perfil del usuario', HttpStatus.INTERNAL_SERVER_ERROR);
  //   }
  // }
}
