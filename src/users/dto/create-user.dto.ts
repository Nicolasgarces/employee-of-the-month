import { IsString } from "class-validator";


export class CreateUserDto {

    @IsString()
    identification: string;
    
    @IsString()
    name: string;
    
    @IsString()
    birthdate: Date;
    
    @IsString()
    email: string;
    
    @IsString()
    password: string;




    

}
