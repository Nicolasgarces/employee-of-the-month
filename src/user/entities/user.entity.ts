import { Person } from "src/person/entities/person.entity";
import { Role } from "src/role/entities/rol.entity";
import { Column, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column({type: 'datetime', default: () =>
    'CURRENT_TIMESTAMP'})
    createdAt: Date;

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

    @DeleteDateColumn()
    deletedAt: Date;

    @Column()
    idRole: number

    @ManyToOne(()=> Role, rol => rol.user)
    @JoinColumn({name: 'idRole'})
    roles: Role;
}
