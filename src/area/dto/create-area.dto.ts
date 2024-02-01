import { IsEmpty, IsString } from "class-validator";

export class CreateAreaDto {
    
    @IsString()
    @IsEmpty()
    name: string
}
