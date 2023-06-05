import { Injectable, PipeTransform, BadRequestException } from '@nestjs/common';
import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';
import { attendanceInterface } from '../dto/create-student.dto';

@Injectable()
export class AttendanceValidationPipe implements PipeTransform<any> {
  async transform(value: any): Promise<any> {
    const attendance = plainToClass(AttendanceClass, value);

    const errors = await validate(attendance);
    if (errors.length > 0) {
      throw new BadRequestException('Invalid attendance data');
    }

    return attendance;
  }
}

class AttendanceClass implements attendanceInterface {
  date: string;
  status: boolean;
}
