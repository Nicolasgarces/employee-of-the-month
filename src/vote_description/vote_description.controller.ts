import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VoteDescriptionService } from './vote_description.service';
import { CreateVoteDescriptionDto } from './dto/create-vote_description.dto';
import { UpdateVoteDescriptionDto } from './dto/update-vote_description.dto';

@Controller('vote-description')
export class VoteDescriptionController {
  constructor(private readonly voteDescriptionService: VoteDescriptionService) {}

  @Post()
  create(@Body() createVoteDescriptionDto: CreateVoteDescriptionDto) {
    return this.voteDescriptionService.create(createVoteDescriptionDto);
  }

  @Get()
  findAll() {
    return this.voteDescriptionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.voteDescriptionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVoteDescriptionDto: UpdateVoteDescriptionDto) {
    return this.voteDescriptionService.update(+id, updateVoteDescriptionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.voteDescriptionService.remove(+id);
  }
}
