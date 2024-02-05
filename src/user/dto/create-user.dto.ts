import { IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateUserDto {

    @IsNumber()
    @IsNotEmpty()
    idPerson: number

    @IsEmail()
    @IsNotEmpty()
    email: string

    @IsString()
    @IsNotEmpty()
    password : string

    deletedAt?: Date;

    @IsNumber()
    idRole?: number

}
