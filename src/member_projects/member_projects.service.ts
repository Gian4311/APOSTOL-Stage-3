import { Injectable } from '@nestjs/common';
import { CreateMemberProjectDto } from './dto/create-member_project.dto';
import { UpdateMemberProjectDto } from './dto/update-member_project.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MemberProjectsService {

  constructor(private prisma: PrismaService) {}
  
  create(createMemberProjectDto: CreateMemberProjectDto) {
    return this.prisma.member_projects.create({ data: createMemberProjectDto });
  }

  findAll() {
    return this.prisma.member_projects.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} memberProject`;
  }

  update(id: number, updateMemberProjectDto: UpdateMemberProjectDto) {
    return `This action updates a #${id} memberProject`;
  }

  remove(id: number) {
    return `This action removes a #${id} memberProject`;
  }
}
