import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { MembersModule } from './members/members.module';
import { ProjectsModule } from './projects/projects.module';
import { MemberProjectsModule } from './member_projects/member_projects.module';

@Module({
  imports: [PrismaModule, MembersModule, ProjectsModule, MemberProjectsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
