import { members, member_projects } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class Member implements members {

  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  role: string;

  @ApiProperty()
  created_at: Date;

  @ApiProperty()
  updated_at: Date;

  @ApiProperty({ required: false, nullable: true })
  deleted_at: Date;
  
}
