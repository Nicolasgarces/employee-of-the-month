import { Injectable } from '@nestjs/common';
import { CreateVoteDescriptionDto } from './dto/create-vote_description.dto';
import { UpdateVoteDescriptionDto } from './dto/update-vote_description.dto';

@Injectable()
export class VoteDescriptionService {
  create(createVoteDescriptionDto: CreateVoteDescriptionDto) {
    return 'This action adds a new voteDescription';
  }

  findAll() {
    return `This action returns all voteDescription`;
  }

  findOne(id: number) {
    return `This action returns a #${id} voteDescription`;
  }

  update(id: number, updateVoteDescriptionDto: UpdateVoteDescriptionDto) {
    return `This action updates a #${id} voteDescription`;
  }

  remove(id: number) {
    return `This action removes a #${id} voteDescription`;
  }
}
