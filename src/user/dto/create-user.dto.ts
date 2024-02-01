import { IsEmpty, IsNumber, IsString } from "class-validator";

export class CreateUserDto {

    @IsNumber()
    @IsEmpty()
    idPerson: number

    @IsString()
    @IsEmpty()
    email: string

    @IsString()
    @IsEmpty()
    password : string



}
