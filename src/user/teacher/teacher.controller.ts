import { Controller, Get } from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { StudentService } from 'src/student/student.service';
import { Student } from 'src/student/schemas/student.schema';

@Controller('teacher')
export class TeacherController {
  constructor(
    private readonly teacherService: TeacherService,
    private readonly studentService: StudentService,
  ) {}

  // Get all students
  @Get('students')
  async getAllStudents(): Promise<Student[]> {
    return await this.studentService.getAllStudents();
  }
}
