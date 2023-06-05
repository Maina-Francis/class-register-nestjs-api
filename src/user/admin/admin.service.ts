import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UpdateStudentDTO } from 'src/student/dto/update-student.dto';
import { Student } from 'src/student/schemas/student.schema';

@Injectable()
export class AdminService {
  constructor(@InjectModel('Student') private studentModel: Model<Student>) {}

  // Get all students
  async getStudents(): Promise<Student[]> {
    const students = await this.studentModel.find();

    if (!students || students.length === 0) {
      throw new NotFoundException('No students found');
    }

    return students;
  }

  //   Update a Student
  async updateStudent(
    studentId: string,
    updateStudentDto: UpdateStudentDTO,
  ): Promise<Student> {
    const existingStudent = await this.studentModel.findByIdAndUpdate(
      studentId,
      updateStudentDto,
      {
        new: true,
      },
    );

    // validate whether the student exists
    if (!existingStudent) {
      throw new NotFoundException(`Student #${studentId} not found`);
    }
    return existingStudent;
  }
}
