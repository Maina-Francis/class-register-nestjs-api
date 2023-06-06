import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTeacherDTO {
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;
}
