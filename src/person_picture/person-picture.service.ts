import { Injectable } from '@nestjs/common';
import { CreatePersonPictureDto } from './dto/create-person-picture.dto';
import { UpdatePersonPictureDto } from './dto/update-person-picture.dto';
import { Repository } from 'typeorm';
import { PersonPicture } from './entities/person-picture.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PersonPictureService {

  constructor(
    @InjectRepository(PersonPicture)
    private PersonPictureRepository: Repository<PersonPicture>
  ){}

  async createPersonPicture(createPersonPictureDto: CreatePersonPictureDto) {
    const newPersonPicture = this.PersonPictureRepository.create(createPersonPictureDto)
    return await this.PersonPictureRepository.save(newPersonPicture);
  }

  async findAll() {
    return await this.PersonPictureRepository.find();
  }

  async findOne(id: number) {
    return await this.PersonPictureRepository.findOneBy({id});
  }

  async update(id: number, updatePersonPictureDto: UpdatePersonPictureDto) {
    return await this.PersonPictureRepository.update(id, updatePersonPictureDto);
  }

  remove(id: number) {
    return this.PersonPictureRepository.softDelete(id);
  }
}
