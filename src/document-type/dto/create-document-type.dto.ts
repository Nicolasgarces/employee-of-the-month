import { IsEmpty, IsString } from "class-validator";

export class CreateDocumentTypeDto {

    @IsString()
    @IsEmpty()
    name: string
}
