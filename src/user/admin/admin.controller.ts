import { Body, Controller, Get, Param, Put } from '@nestjs/common';
import { AdminService } from './admin.service';
import { Student } from 'src/student/schemas/student.schema';
import { UpdateStudentDTO } from 'src/student/dto/update-student.dto';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Get('students')
  async getStudents(): Promise<Student[]> {
    return await this.adminService.getStudents();
  }

  //   Update a Student
  @Put(':id')
  async updateStudent(
    @Param('id') studentId: string,
    @Body() updateStudentDto: UpdateStudentDTO,
  ): Promise<Student> {
    return await this.adminService.updateStudent(studentId, updateStudentDto);
  }
}
