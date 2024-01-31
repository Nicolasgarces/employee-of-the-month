import { PartialType } from '@nestjs/swagger';
import { CreateVoteDescriptionDto } from './create-vote_description.dto';

export class UpdateVoteDescriptionDto extends PartialType(CreateVoteDescriptionDto) {}
