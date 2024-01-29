import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Vote {

    @PrimaryColumn()
    id: number;

    

    @Column()
    fechaVoto: Date;

}
