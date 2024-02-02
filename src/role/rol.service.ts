import { Injectable } from '@nestjs/common';
import { CreateRolDto } from './dto/create-rol.dto';
import { UpdateRolDto } from './dto/update-rol.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from './entities/rol.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RoleService {

  constructor(
    @InjectRepository(Role)
    private RoleRepository: Repository<Role>
  ){}

  async createRole(createRolDto: CreateRolDto) {
    const newRole = this.RoleRepository.create(createRolDto)
    return await this.RoleRepository.save(newRole);
  }

  async findAll() {
    return await this.RoleRepository.find();
  }

  async findOne(id: number) {
    return await this.RoleRepository.findOneBy({id});
  }

  async update(id: number, updateRolDto: UpdateRolDto) {
    return await this.RoleRepository.update(id, updateRolDto);
  }

  remove(id: number) {
    return this.RoleRepository.softDelete(id);
  }
}
