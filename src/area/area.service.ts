import { Injectable } from '@nestjs/common';
import { CreateAreaDto } from './dto/create-area.dto';
import { UpdateAreaDto } from './dto/update-area.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Area } from './entities/area.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AreaService {

  constructor(
    @InjectRepository(Area)private AreaRepository : Repository<Area>,
  ){}

  async createArea(createAreaDto: CreateAreaDto) {
    const newArea = this.AreaRepository.create(createAreaDto)
    return await this.AreaRepository.save(newArea);
  }

  async findAll() {
    return await this.AreaRepository.find();
  }

  async findOne(id: number) {
    return await this.AreaRepository.findOneBy({id});
  }

  async update(id: number, updateAreaDto: UpdateAreaDto) {
    return await this.AreaRepository.update(id, updateAreaDto);
  }

  async remove(id: number) {
    return await this.AreaRepository.softDelete(id);
  }
}
