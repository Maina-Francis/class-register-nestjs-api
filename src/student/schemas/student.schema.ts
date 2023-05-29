import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Student {
  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop()
  class: string;

  @Prop()
  classTeacher: string;

  @Prop()
  attendance: boolean;
}

export const StudentSchema = SchemaFactory.createForClass(Student);
