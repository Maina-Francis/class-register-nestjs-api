import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { StudentService } from './student.service';
import { CreateStudentDTO } from './dto/create-student.dto';
import { UpdateStudentDTO } from './dto/update-student.dto';
import { Student } from './schemas/student.schema';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  //   create a new student
  @Post()
  async createStudent(
    @Body() createStudentDto: CreateStudentDTO,
  ): Promise<Student> {
    return await this.studentService.createStudent(createStudentDto);
  }

  //   Update a Student
  @Put(':id')
  async updateStudent(
    @Param('id') studentId: string,
    @Body() updateStudentDto: UpdateStudentDTO,
  ): Promise<Student> {
    return await this.studentService.updateStudent(studentId, updateStudentDto);
  }

  //   get all students
  @Get()
  async getAllStudents(): Promise<Student[]> {
    return await this.studentService.getAllStudents();
  }

  //   get student by id
  @Get(':id')
  async getStudentByStudentId(
    @Param('id') studentId: string,
  ): Promise<Student> {
    return await this.studentService.getStudentById(studentId);
  }

  //   delete a student by id
  @Delete(':id')
  async deleteStudent(@Param('id') studentId: string): Promise<Student> {
    return await this.studentService.deleteStudent(studentId);
  }
}
