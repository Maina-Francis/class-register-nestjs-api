import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentSchema } from './schemas/student.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Student',
        schema: StudentSchema,
      },
    ]),
  ],
})
export class StudentModule {}
