import { Injectable } from '@nestjs/common';
import { CreateVoteDto } from './dto/create-vote.dto';
import { UpdateVoteDto } from './dto/update-vote.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Vote } from './entities/vote.entity';
import { Repository } from 'typeorm';

@Injectable()
export class VoteService {

  constructor(
    @InjectRepository(Vote)
    private VoteRepository : Repository<Vote>

  ){}

  async create(createVoteDto: CreateVoteDto) {
    const newVote = this.VoteRepository.create(createVoteDto)
    return await this.VoteRepository.save(newVote);
  }

  async findAll() {
    return await this.VoteRepository.find();
  }

  async findOne(id: number) {
    return await this.VoteRepository.findOneBy({id});
  }

  async update(id: number, updateVoteDto: UpdateVoteDto) {
    return await this.VoteRepository.update(id, updateVoteDto);
  }

  remove(id: number) {
    return this.VoteRepository.softDelete(id);
  }
}
