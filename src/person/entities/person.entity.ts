import { Area } from "src/area/entities/area.entity";
import {DocumentType} from "src/document-type/entities/document-type.entity"
import { PersonPicture } from "src/person-picture/entities/person-picture.entity";
import { User } from "src/user/entities/user.entity";
import { VoteDescription } from "src/vote_description/entities/vote_description.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Person {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    identification: string

    @Column()
    idDocumentType: number

    @ManyToOne(() => DocumentType, documentType => documentType.people)
    @JoinColumn( {name: 'idDocumentType'})
    documentType: DocumentType
    
    @Column({default : true})
    state: boolean

    @Column()
    idArea: number

    @ManyToOne(() => Area, area => area.peopĺe)
    @JoinColumn({name: 'idArea' })
    area: Area

    @OneToMany(() => PersonPicture, personPicture => personPicture.person)
    personPictures: PersonPicture[];

    @OneToMany(() => User, user => user.people)
    users: User[];

    @OneToMany(() => VoteDescription, voteDescription => voteDescription.voterPerson)
    votesDescriptionsVoters: VoteDescription[];

    @OneToMany(() => VoteDescription, voteDescription => voteDescription.votedPerson)
    votesDescriptionsVoteds: VoteDescription[];

}
