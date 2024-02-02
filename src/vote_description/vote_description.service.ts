import { Injectable } from '@nestjs/common';
import { CreateVoteDescriptionDto } from './dto/create-vote_description.dto';
import { UpdateVoteDescriptionDto } from './dto/update-vote_description.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { VoteDescription } from './entities/vote_description.entity';
import { Repository } from 'typeorm';

@Injectable()
export class VoteDescriptionService {

  constructor(
    @InjectRepository(VoteDescription)
    private VoteDescriptionRepository : Repository<VoteDescription>
  ){}

  async create(createVoteDescriptionDto: CreateVoteDescriptionDto) {
    const newVoteDescription = this.VoteDescriptionRepository.create(createVoteDescriptionDto)
    return await this.VoteDescriptionRepository.save(newVoteDescription);
  }

  async findAll() {
    return await this.VoteDescriptionRepository.find();
  }

  async findOne(id: number) {
    return await this.VoteDescriptionRepository.findOneBy({id});
  }

  async update(id: number, updateVoteDescriptionDto: UpdateVoteDescriptionDto) {
    return await this.VoteDescriptionRepository.update(id ,updateVoteDescriptionDto);
  }

  remove(id: number) {
    return this.VoteDescriptionRepository.softDelete(id);
  }
}
