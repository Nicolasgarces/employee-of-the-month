import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Person } from 'src/person/entities/person.entity';

@Entity()
export class PersonPicture {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    urlPicture: string

    @Column()
    idPerson: number

    @ManyToOne(() => Person, person => person.personPicture)
    @JoinColumn({name: 'idPerson' })
    person: Person;

    @Column()
    state: boolean;

    @OneToMany(() => Person, person => person.personPicture)
    people: Person;

}

