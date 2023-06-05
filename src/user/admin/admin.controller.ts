import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AdminService } from './admin.service';
import { Student } from 'src/student/schemas/student.schema';
import { UpdateStudentDTO } from 'src/student/dto/update-student.dto';
import { CreateStudentDTO } from 'src/student/dto/create-student.dto';
import { StudentService } from 'src/student/student.service';

@Controller('admin')
export class AdminController {
  constructor(
    private readonly adminService: AdminService,
    private readonly studentService: StudentService,
  ) {}

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

  //   create a new student
  @Post()
  async createStudent(
    @Body() createStudentDto: CreateStudentDTO,
  ): Promise<Student> {
    return await this.studentService.createStudent(createStudentDto);
  }

  //   delete a student by id
  @Delete(':id')
  async deleteStudent(@Param('id') studentId: string): Promise<Student> {
    return await this.studentService.deleteStudent(studentId);
  }
}
