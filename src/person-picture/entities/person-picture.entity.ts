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

    @ManyToOne(() => Person, person => person.personPictures)
    @JoinColumn({name: 'idPerson' })
    person: Person;

    @Column({default: true})
    state: boolean;

}

