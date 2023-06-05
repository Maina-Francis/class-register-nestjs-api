import { Module } from '@nestjs/common';
import { AdminController } from './admin/admin.controller';
import { TeacherController } from './teacher/teacher.controller';
import { TeacherService } from './teacher/teacher.service';
import { AdminService } from './admin/admin.service';

@Module({
  controllers: [AdminController, TeacherController],
  providers: [TeacherService, AdminService]
})
export class UserModule {}
