import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class CreateStudentDTO {
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsString()
  @IsNotEmpty()
  class: string;

  @IsString()
  @IsNotEmpty()
  classTeacher: string; //ObjectId

  @IsBoolean()
  @IsNotEmpty()
  attendance: boolean;
}
