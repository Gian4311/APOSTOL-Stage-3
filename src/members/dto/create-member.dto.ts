import { ApiProperty } from '@nestjs/swagger';

export class CreateMemberDto {
  @ApiProperty({ required: true })
  name: string;

  @ApiProperty({ required: true })
  role: string;
}