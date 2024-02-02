import { Person } from "src/person/entities/person.entity"
import { Vote } from "src/vote/entities/vote.entity"
import { Column, DeleteDateColumn, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Area {
    @PrimaryGeneratedColumn()
    id: number

    @Column({type: 'datetime', default: () =>
    'CURRENT_TIMESTAMP'})
    createdAt: Date;

    @Column()
    name: string

    @Column({default : true})
    state: boolean

    @OneToMany(() => Person, person=> person.area)
    peopĺe: Person[]

    @OneToMany(() => Vote, vote => vote.area)
    votes: Vote[]

    @DeleteDateColumn()
    deletedAt: Date;

}
