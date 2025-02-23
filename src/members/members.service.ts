import { Injectable } from '@nestjs/common';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import { PrismaService } from 'src/prisma/prisma.service';

const ROLE_LIST = [ "backend", "frontend", "UI/UX" ];

@Injectable()
export class MembersService {

  constructor(private prisma: PrismaService) {}
  
  create(createMemberDto: CreateMemberDto) {

    if( !createMemberDto.name ) return {
      "status": "error",
      "message": "'name' cannot be empty."
    };
    if( !ROLE_LIST.includes( createMemberDto.role ) ) return {
      "status": "error",
      "message": "'role' must be one of the following: backend, frontend, UI/UX."
    };
    return this.prisma.members.create({ data: createMemberDto }).then( data => { return {
      message: "Member added successfully.",
      data
    } });

  }

  findAll() {

    return this.prisma.members.findMany().then( data => { return { message: 8, data } });
    
  }

  findOne(id: number) {
    return `This action returns a #${id} member`;
  }

  update(id: number, updateMemberDto: UpdateMemberDto) {
    return `This action updates a #${id} member`;
  }

  remove(id: number) {
    return `This action removes a #${id} member`;
  }
}
