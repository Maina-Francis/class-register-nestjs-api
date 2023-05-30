import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export interface attendanceInterface {
  date: string;
  status: boolean;
}

export class CreateStudentDTO {
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsString()
  @IsNotEmpty()
  classId: string;

  @IsString()
  @IsNotEmpty()
  classTeacher: string; //ObjectId

  @IsNotEmpty()
  attendance: attendanceInterface;
}
