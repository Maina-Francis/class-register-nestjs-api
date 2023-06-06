import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { attendanceInterface } from 'src/student/dto/create-student.dto';
import { Student } from 'src/student/schemas/student.schema';

@Injectable()
export class TeacherService {
  constructor(@InjectModel('Student') private studentModel: Model<Student>) {}

  // update student attendance
  async updateStudentAttendance(
    studentId: string,
    attendanceUpdate: Partial<attendanceInterface>,
  ) {
    // Retrieve the student from the database
    const student = await this.studentModel.findById(studentId);
    if (!student) {
      throw new NotFoundException('Student not found');
    }

    // Check if the attendance field is present in the update object
    if ('attendance' in attendanceUpdate) {
      // Update the attendance field of the student
      student.attendance = {
        ...student.attendance,
        ...(attendanceUpdate.attendance as attendanceInterface),
      };
    } else {
      throw new BadRequestException('Only the attendance field can be updated');
    }

    // Save the updated student to the database
    await student.save();

    return student;
  }
}
