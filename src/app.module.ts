import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AreaModule } from './area/area.module';
import { DocumentTypeModule } from './document_type/document-type.module';
import { PersonModule } from './person/person.module';
import { PersonPictureModule } from './person_picture/person-picture.module';
import { UserModule } from './user/user.module';
import { VoteModule } from './vote/vote.module';
import { VoteDescriptionModule } from './vote_description/vote_description.module';
import { RolModule } from './role/rol.module';
import { AuthModule } from './auth/auth.module';

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
  RolModule,
  AuthModule,
],
  controllers: [],
  providers: [],
})
export class AppModule {}
