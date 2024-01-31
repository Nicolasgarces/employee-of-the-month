import { Person } from "src/person/entities/person.entity"
import { Vote } from "src/vote/entities/vote.entity"
import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Area {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    state: boolean

    @OneToMany(() => Person, person=> person.area)
    peopĺe: Person[]

    @OneToMany(() => Vote, vote => vote.area)
    votes: Vote[]

}
