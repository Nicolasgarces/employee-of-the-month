import { Person } from "src/person/entities/person.entity";
import { Vote } from "src/vote/entities/vote.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class VoteDescription {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    idVote: number

    @ManyToOne(() => Vote, vote => vote.voteDescriptions)
    @JoinColumn({name : 'idVote'})
    vote: Vote;

    @Column()
    idVoter: number

    @ManyToOne(() => Person, person => person.votesDescriptionsVoters)
    @JoinColumn({name : 'idVoter'})
    voterPerson: Person;

    @Column()
    idVoted: number

    @ManyToOne(() => Person, person => person.votesDescriptionsVoteds)
    @JoinColumn({name : 'idVoted'})
    votedPerson: Person;

    @Column({default: true})
    state: boolean

}
