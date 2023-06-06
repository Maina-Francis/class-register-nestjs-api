import { Body, Controller, Get, Param, Patch } from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { StudentService } from 'src/student/student.service';
import { Student } from 'src/student/schemas/student.schema';
import { attendanceInterface } from 'src/student/dto/create-student.dto';

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

  //   Update student attendance
  @Patch('/students/:studentId/attendance')
  async updateStudentAttendance(
    @Param('studentId') studentId: string,
    @Body() attendanceUpdate: Partial<attendanceInterface>,
  ) {
    return this.teacherService.updateStudentAttendance(
      studentId,
      attendanceUpdate,
    );
  }
}
