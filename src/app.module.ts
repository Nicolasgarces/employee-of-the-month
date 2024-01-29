import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VotesModule } from './votes/votes.module';
import { EmployeesModule } from './employees/employees.module';

@Module({
  imports: [
  UsersModule,
  TypeOrmModule.forRoot({
    type: "mysql",
    host: "localhost",
    port: 3307,
    username: "user_crud",
    password: "root",
    database: "db_crud",
    autoLoadEntities: true,
    synchronize: true,
  }),
  VotesModule,
  EmployeesModule,
],
  controllers: [],
  providers: [],
})
export class AppModule {}
