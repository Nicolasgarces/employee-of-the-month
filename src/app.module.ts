import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AreaModule } from './area/area.module';
import { DocumentTypeModule } from './document-type/document-type.module';
import { PersonModule } from './person/person.module';
import { PersonPictureModule } from './person-picture/person-picture.module';
import { UserModule } from './user/user.module';
import { VoteModule } from './vote/vote.module';
import { VoteDescriptionModule } from './vote_description/vote_description.module';

@Module({
  imports: [
  AreaModule, 
  TypeOrmModule.forRoot({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "user_crud",
    password: "root",
    database: "employee_month",
    autoLoadEntities: true,
    synchronize: true,
  }),
  AreaModule,
  DocumentTypeModule,
  PersonModule,
  PersonPictureModule,
  UserModule,
  VoteModule,
  VoteDescriptionModule,
],
  controllers: [],
  providers: [],
})
export class AppModule {}
