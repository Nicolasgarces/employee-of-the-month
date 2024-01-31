import { Person } from "src/person/entities/person.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class DocumentType {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    state: boolean

    @OneToMany(() => Person, person => person.documentType)
    people: Person[];

}
