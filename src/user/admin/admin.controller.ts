import { Controller, Get } from '@nestjs/common';
import { AdminService } from './admin.service';
import { Student } from 'src/student/schemas/student.schema';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Get('students')
  async getStudents(): Promise<Student[]> {
    return await this.adminService.getStudents();
  }
}
