import { IsNotEmpty, IsString } from "class-validator"

export class CreatePersonDto {

    @IsString()
    @IsNotEmpty()
    name: string

    @IsString()
    @IsNotEmpty()
    identification: string
    
    @IsNotEmpty()
    idDocumentType: number

    @IsNotEmpty()
    idArea: number

    deletedAt?: Date;

}
