import { SetMetadata } from '@nestjs/common';
import { idRole } from '../enums/rol.enums'

export const ROLES_KEY = 'roles';
export const Roles = (...roles: idRole[]) => SetMetadata(ROLES_KEY, roles);