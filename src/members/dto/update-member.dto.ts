import { PartialType } from '@nestjs/mapped-types';
import { CreateMemberDto } from './create-member.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateMemberDto extends PartialType(CreateMemberDto) {

    @ApiProperty({ required: false })
    name: string;

    @ApiProperty({ required: false })
    role: string;

    @ApiProperty({ required: false })
    deleted_at?: Date;

}
