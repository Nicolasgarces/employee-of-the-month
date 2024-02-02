import { Person } from "src/person/entities/person.entity";
import { Column, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class DocumentType {

    @PrimaryGeneratedColumn()
    id: number

    @Column({type: 'datetime', default: () =>
    'CURRENT_TIMESTAMP'})
    createdAt: Date;

    @Column()
    name: string

    @Column({default : true})
    state: boolean

    @OneToMany(() => Person, person => person.documentType)
    people: Person[];

    @DeleteDateColumn()
    deletedAt: Date;

}
