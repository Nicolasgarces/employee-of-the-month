import { Module } from '@nestjs/common';
import { RoleService } from './rol.service';
import { RolController } from './rol.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role } from './entities/rol.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Role])],
  controllers: [RolController],
  providers: [RoleService],
  exports:[TypeOrmModule]
})
export class RolModule {}
