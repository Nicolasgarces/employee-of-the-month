import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PersonPictureService } from './person-picture.service';
import { CreatePersonPictureDto } from './dto/create-person-picture.dto';
import { UpdatePersonPictureDto } from './dto/update-person-picture.dto';

@Controller('person-picture')
export class PersonPictureController {
  constructor(private readonly personPictureService: PersonPictureService) {}

  @Post()
  create(@Body() createPersonPictureDto: CreatePersonPictureDto) {
    return this.personPictureService.create(createPersonPictureDto);
  }

  @Get()
  findAll() {
    return this.personPictureService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.personPictureService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePersonPictureDto: UpdatePersonPictureDto) {
    return this.personPictureService.update(+id, updatePersonPictureDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.personPictureService.remove(+id);
  }
}
