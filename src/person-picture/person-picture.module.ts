import { Module } from '@nestjs/common';
import { PersonPictureService } from './person-picture.service';
import { PersonPictureController } from './person-picture.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonPicture } from './entities/person-picture.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PersonPicture])],
  controllers: [PersonPictureController],
  providers: [PersonPictureService],
  exports:[TypeOrmModule]
})
export class PersonPictureModule {}
