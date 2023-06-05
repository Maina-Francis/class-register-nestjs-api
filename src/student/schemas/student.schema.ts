import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes } from 'mongoose';
import { attendanceInterface } from '../dto/create-student.dto';

@Schema()
export class Student extends Document {
  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop()
  class: string;

  @Prop({ type: SchemaTypes.Mixed })
  attendance: attendanceInterface;
}

export const StudentSchema = SchemaFactory.createForClass(Student);
