import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
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
}
