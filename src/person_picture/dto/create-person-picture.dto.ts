import { IsString, IsNumber, IsNotEmpty } from 'class-validator';

export class CreatePersonPictureDto {

    @IsString()
    @IsNotEmpty()
    urlPicture: string

    @IsNumber()
    @IsNotEmpty()
    idPerson: number

    deletedAt?: Date;
}
