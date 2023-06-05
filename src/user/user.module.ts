import { Module } from '@nestjs/common';
import { AdminController } from './admin/admin.controller';
import { TeacherController } from './teacher/teacher.controller';
import { TeacherService } from './teacher/teacher.service';
import { AdminService } from './admin/admin.service';
import { StudentSchema } from 'src/student/schemas/student.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Student',
        schema: StudentSchema,
      },
    ]),
  ],
  controllers: [AdminController, TeacherController],
  providers: [TeacherService, AdminService],
})
export class UserModule {}
