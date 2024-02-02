import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateVoteDescriptionDto {

    @IsNumber()
    @IsNotEmpty()
    idVote: number

    @IsNumber()
    @IsNotEmpty()
    idVoter: number

    @IsNumber()
    @IsNotEmpty()
    idVoted: number

    deletedAt?: Date;

}
