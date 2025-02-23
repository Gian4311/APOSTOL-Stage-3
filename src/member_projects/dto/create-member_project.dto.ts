import { ApiProperty } from '@nestjs/swagger';

export class CreateMemberProjectDto {
  @ApiProperty({ required: true })
  member_id: number;

  @ApiProperty({ required: true })
  project_id: number;
}
