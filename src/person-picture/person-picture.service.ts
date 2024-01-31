import { Injectable } from '@nestjs/common';
import { CreatePersonPictureDto } from './dto/create-person-picture.dto';
import { UpdatePersonPictureDto } from './dto/update-person-picture.dto';

@Injectable()
export class PersonPictureService {
  create(createPersonPictureDto: CreatePersonPictureDto) {
    return 'This action adds a new personPicture';
  }

  findAll() {
    return `This action returns all personPicture`;
  }

  findOne(id: number) {
    return `This action returns a #${id} personPicture`;
  }

  update(id: number, updatePersonPictureDto: UpdatePersonPictureDto) {
    return `This action updates a #${id} personPicture`;
  }

  remove(id: number) {
    return `This action removes a #${id} personPicture`;
  }
}
