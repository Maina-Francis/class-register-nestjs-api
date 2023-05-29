import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Student } from './schemas/student.schema';
import { CreateStudentDTO } from './dto/create-student.dto';
import { UpdateStudentDTO } from './dto/update-student.dto';

@Injectable()
export class StudentService {
  constructor(@InjectModel('Student') private studentModel: Model<Student>) {}

  //   create a new Student
  async createStudent(createStudentDto: CreateStudentDTO): Promise<Student> {
    const newStudent = await new this.studentModel(createStudentDto);
    return newStudent.save();
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

  //   get all students
  async getAllStudents(): Promise<Student[]> {
    const studentData = await this.studentModel.find();

    if (!studentData) {
      throw new NotFoundException(`Students data not found`);
    }

    return studentData;
  }

  //   get student by id
  async getStudentById(studentId: string): Promise<Student> {
    const student = await this.studentModel.findById(studentId).exec();

    // validate whether the student exists
    if (!student) {
      throw new NotFoundException(`Student #${studentId} not found`);
    }

    return student;
  }

  //   delete a student by id
  async deleteStudent(studentId: string): Promise<Student> {
    const deletedStudent = await this.studentModel
      .findByIdAndDelete(studentId)
      .exec();

    if (!deletedStudent) {
      throw new NotFoundException(`Student #${studentId} not found`);
    }

    return deletedStudent;
  }
}
