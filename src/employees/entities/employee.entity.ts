import { User } from "src/users/entities/user.entity";
import { Column, DeleteDateColumn, Entity,  JoinColumn,  OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Employee {

    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    identification: string;

    @Column()
    name: string;
    
    @Column()
    area: string;

    @DeleteDateColumn()
    deletedAt: Date;

    @OneToOne(() => User)
    @JoinColumn()
    user: User;
}
  