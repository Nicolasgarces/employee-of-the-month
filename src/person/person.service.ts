import { Injectable } from '@nestjs/common';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Person } from './entities/person.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PersonService {

  constructor(
    @InjectRepository (Person)
    private PersonRepository : Repository<Person>,
  ){}

  async createPerson(createPersonDto: CreatePersonDto) {
    const newPerson = this.PersonRepository.create(createPersonDto)
    return this.PersonRepository.save(newPerson);
  }

  async findAll() {
    return await this.PersonRepository.find();
  }

  async findOne(id: number) {
    return await this.PersonRepository.findOneBy({id});
  }

  async update(id: number, updatePersonDto: UpdatePersonDto) {
    return await this.PersonRepository.update(id, updatePersonDto);
  }

  remove(id: number) {
    return this.PersonRepository.softDelete(id);
  }
}
