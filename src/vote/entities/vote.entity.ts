import { Area } from "src/area/entities/area.entity";
import { VoteDescription } from "src/vote_description/entities/vote_description.entity";
import { Column, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Vote {

    @PrimaryGeneratedColumn()
    id: number

    @Column({type: 'datetime', default: () =>
    'CURRENT_TIMESTAMP'})
    createdAt: Date;

    @Column()
    idArea: number

    @ManyToOne(() => Area, area => area.votes)
    @JoinColumn({name: 'idArea'})
    area: Area

    @Column()
    VoteDate: Date

    @Column({default: true})
    state: boolean

    @OneToMany(() => VoteDescription, voteDescription => voteDescription.vote)
    voteDescriptions: VoteDescription[]

    @DeleteDateColumn()
    deletedAt: Date;

}
