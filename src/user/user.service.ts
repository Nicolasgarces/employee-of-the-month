import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';


@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User)
    private UserRepository : Repository<User>
  ){}

  async createUser(createUserDto: CreateUserDto) {
    const newUser = this.UserRepository.create(createUserDto)
    return await this.UserRepository.save(newUser);
  }


  findOneByEmail(email: string){
    return this.UserRepository.findOneBy({email})
  }

  async findAll() {
    return await this.UserRepository.find();
  }

  async findOne(id: number) {
    return await this.UserRepository.findOneBy({id});
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return await this.UserRepository.update(id, updateUserDto);
  }

  remove(id: number) {
    return this.UserRepository.softDelete(id);
  }
}
