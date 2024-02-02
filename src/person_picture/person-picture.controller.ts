import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PersonPictureService } from './person-picture.service';
import { CreatePersonPictureDto } from './dto/create-person-picture.dto';
import { UpdatePersonPictureDto } from './dto/update-person-picture.dto';

@Controller('person_picture')
export class PersonPictureController {
  constructor(private readonly personPictureService: PersonPictureService) {}

  @Post()
  create(@Body() createPersonPictureDto: CreatePersonPictureDto) {
    return this.personPictureService.createPersonPicture(createPersonPictureDto);
  }

  @Get()
  findAll() {
    return this.personPictureService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.personPictureService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updatePersonPictureDto: UpdatePersonPictureDto) {
    return this.personPictureService.update(id, updatePersonPictureDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.personPictureService.remove(id);
  }
}
