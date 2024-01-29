import { Employee } from "src/employees/entities/employee.entity";
import { Vote } from "src/votes/entities/vote.entity";
import { Column, DeleteDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    identification: string;

    @Column()
    name: string;

    @Column()
    birthdate: Date;

    @Column()
    email: string;

    @Column()
    password: string;
    
    @DeleteDateColumn()
    deletedAt: Date;

    // @OneToMany(() => Vote, () => Vote.user)
    // vote: Vote[]

}
