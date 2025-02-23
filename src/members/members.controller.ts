import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MembersService } from './members.service';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Member } from './entities/member.entity';

// {
//   message: "Member added successfully.",
//   data: this.prisma.members.create({ data: createMemberDto })
// }

class MemberResponse {

  message: string = "feefef";
  constructor() {

    this.message = "Member added successfully.";

  }

}

@Controller('members')
@ApiTags('members')
export class MembersController {
  constructor(private readonly membersService: MembersService) {}

  @Post()
  create(@Body() createMemberDto: CreateMemberDto) {

    return this.membersService.create(createMemberDto)

  }

  @Get()
  findAll() {
    return this.membersService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: Member })
  findOne(@Param('id') id: string) {
    return this.membersService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: Member })
  update(@Param('id') id: string, @Body() updateMemberDto: UpdateMemberDto) {
    return this.membersService.update(+id, updateMemberDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: Member })
  remove(@Param('id') id: string) {
    return this.membersService.remove(+id);
  }
}
