import { Module } from '@nestjs/common';
import { MemberProjectsService } from './member_projects.service';
import { MemberProjectsController } from './member_projects.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [MemberProjectsController],
  providers: [MemberProjectsService],
  imports: [PrismaModule]
})
export class MemberProjectsModule {}
