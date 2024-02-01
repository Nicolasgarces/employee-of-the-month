import { IsEmpty, IsNumber } from "class-validator";

export class CreateVoteDescriptionDto {

    @IsNumber()
    @IsEmpty()
    idVote: number

    @IsNumber()
    @IsEmpty()
    idVoter: number

    @IsNumber()
    @IsEmpty()
    idVoted: number

}
