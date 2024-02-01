import { Person } from "src/person/entities/person.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    idPerson: number

    @ManyToOne(() => Person, person => person.users)
    @JoinColumn({name: 'idPerson'})
    people: Person;

    @Column()
    email: string

    @Column()
    password: string

    @Column({default: true})
    state: string

}
