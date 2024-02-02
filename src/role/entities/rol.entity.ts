import { User } from "src/user/entities/user.entity";
import { Column, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Role {

    @PrimaryGeneratedColumn()
    id: number

    @Column({type: 'datetime', default: () =>
    'CURRENT_TIMESTAMP'})
    createdAt: Date;

    @Column()
    name: string

    @Column({default : true})
    state: boolean

    @DeleteDateColumn()
    deletedAt: Date;
    

    @OneToMany(()=> User, user=> user.roles)
    user: User[]

}
