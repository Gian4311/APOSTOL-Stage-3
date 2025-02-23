import { PartialType } from '@nestjs/swagger';
import { CreateMemberProjectDto } from './create-member_project.dto';

export class UpdateMemberProjectDto extends PartialType(CreateMemberProjectDto) {}
