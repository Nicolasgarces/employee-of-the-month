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
    state: boolean

    @IsNotEmpty()
    idArea: number
    

}
