import { IsDate, IsNotEmpty, IsNumber } from "class-validator";

export class CreateVoteDto {

    @IsNumber()
    @IsNotEmpty()
    idArea: number

    @IsDate()
    @IsNotEmpty()
    VoteDate: Date

    deletedAt?: Date;
}
