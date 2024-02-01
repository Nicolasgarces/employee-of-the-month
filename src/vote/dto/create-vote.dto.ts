import { IsDate, IsEmpty, IsNumber } from "class-validator";

export class CreateVoteDto {

    @IsNumber()
    @IsEmpty()
    idArea: number

    @IsDate()
    @IsEmpty()
    VoteDate: Date

}
