import { Module } from '@nestjs/common';
import { VoteDescriptionService } from './vote_description.service';
import { VoteDescriptionController } from './vote_description.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VoteDescription } from './entities/vote_description.entity';

@Module({
  imports: [TypeOrmModule.forFeature([VoteDescription])],
  controllers: [VoteDescriptionController],
  providers: [VoteDescriptionService],
  exports:[TypeOrmModule]
})
export class VoteDescriptionModule {}
