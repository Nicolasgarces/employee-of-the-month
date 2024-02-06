import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { idRole } from '../enums/rol.enums';
import { ROLES_KEY } from '../decorators/roles.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<idRole[]>('roles', [
      context.getHandler(),
      context.getClass(),
    ]);
    if (!requiredRoles) {
      return true;
    }

    console.log('requiredRoles', requiredRoles);
    
    const { user } = context.switchToHttp().getRequest();
    console.log('user: ', user);

    if (!user || !user.idRole) {
      return false; // Si no hay usuario o no tiene un id de rol válido, se niega el acceso
    }
    
    return requiredRoles.some((role) => user.idRole === role);
  }
}










// import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
// import { Reflector } from '@nestjs/core';
// import { Observable } from 'rxjs';

// @Injectable()
// export class RolesGuard implements CanActivate {

//   constructor(private readonly reflector: Reflector){}

//   canActivate(
//     context: ExecutionContext,
//   ): boolean {

//     const roles = this.reflector.getAllAndOverride('roles', [
//       context.getHandler(),
//       context.getClass()
//     ]);

//     if (!roles){
//       return true
//     }
//     console.log('roles: ', roles);
    
//     const { user } = context.switchToHttp().getRequest();
//     console.log('user: ', user);
    
//     return roles === user.roles;
//   }
// } 