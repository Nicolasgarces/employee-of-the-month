import { idRole } from "../enums/rol.enums";
import { UseGuards, applyDecorators } from "@nestjs/common";
import { Roles } from "./roles.decorator";
import { AuthGuard } from "../guard/auth.guard";
import { RolesGuard } from "../guard/roles.guard";

export function Auth(idRole:idRole){
    return applyDecorators(
        Roles(idRole),
        UseGuards(AuthGuard, RolesGuard)
    )
}