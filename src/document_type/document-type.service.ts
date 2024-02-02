import { Injectable } from '@nestjs/common';
import { CreateDocumentTypeDto } from './dto/create-document-type.dto';
import { UpdateDocumentTypeDto } from './dto/update-document-type.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DocumentType } from 'src/document_type/entities/document-type.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DocumentTypeService {

  constructor(
    @InjectRepository(DocumentType)
    private documentTypeRepository: Repository<DocumentType>,
  ){}


  async createDocumentType(createDocumentTypeDto: CreateDocumentTypeDto) {
    const newDocuemntType = this.documentTypeRepository.create(createDocumentTypeDto)
    return await this.documentTypeRepository.save(newDocuemntType);
  }

  async findAll() {
    return await this.documentTypeRepository.find();
  }

  async findOne(id: number) {
    return await this.documentTypeRepository.findOneBy({id});
  }

  async update(id: number, updateDocumentTypeDto: UpdateDocumentTypeDto) {
    return await this.documentTypeRepository.update(id, updateDocumentTypeDto );
  }

  async remove(id: number) {
    return await this.documentTypeRepository.softDelete({id});
  }
}
