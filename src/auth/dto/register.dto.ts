import { Transform } from "class-transformer";
import { IsEmail, IsNumber, IsString, MinLength } from "class-validator";

export class RegisterDto {
    
    @IsNumber()
    idPerson: number

    @Transform(({value}) => value.trim())
    @IsString()
    name : string;

    @IsEmail()
    email: string
    
    @Transform(({value}) => value.trim())  // elimina los espacios en blanco
    @IsString()
    @MinLength(6)
    password: string

    @IsNumber()
    idRole?: number
}