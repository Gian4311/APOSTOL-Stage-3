import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProjectsService {

  constructor(private prisma: PrismaService) {}

  create(createProjectDto: CreateProjectDto) {
    return this.prisma.projects.create({ data: createProjectDto });
  }

  findAll() {
    return `This action returns all projects`;
  }

  async findMembers(id: number) {
    return this.prisma.members.findMany( {

      where: {
        member_projects: { some: { project_id: Number( id ) } }
      },
      select: {
        id: true,
        name: true,
        role: true,
        member_projects: {
          select: {
            assigned_at: true
          }
        },
      },
      
    } ).then( data => {

      if( data.length === 0 ) throw new Error( "404" );
      return data.reduce< {
        id: number,
        name: string,
        role: string,
        assigned_at: Date
      }[] >( ( array, member ) => {

        array.push( ...member.member_projects.map( ( { assigned_at } ) => { return {
          id: member.id,
          name: member.name,
          role: member.role,
          assigned_at
        } } ) )
        return array;

      }, [] );

    } ).catch( error => {

      return `${ error }. Project does not exist.`;

    } );
  }

  findOne(id: number) {
    return `This action returns a #${id} project`;
  }

  update(id: number, updateProjectDto: UpdateProjectDto) {
    return `This action updates a #${id} project`;
  }

  remove(id: number) {
    return `This action removes a #${id} project`;
  }
}
