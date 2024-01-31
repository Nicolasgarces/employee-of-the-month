import { PartialType } from '@nestjs/swagger';
import { CreatePersonPictureDto } from './create-person-picture.dto';

export class UpdatePersonPictureDto extends PartialType(CreatePersonPictureDto) {}
