import { IsString, IsEmpty, IsNumber } from 'class-validator';

export class CreatePersonPictureDto {

    @IsString()
    @IsEmpty()
    urlPicture: string

    @IsNumber()
    @IsEmpty()
    idPerson: number
}
