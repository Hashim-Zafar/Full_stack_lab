import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './student.entity';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
  ) {}

  findAll() {
    return this.studentRepository.find();
  }

  async findOne(id: number) {
    const student = await this.studentRepository.findOneBy({ id });
    if (!student) {
      throw new NotFoundException(`Student with id ${id} not found`);
    }
    return student;
  }

  create(createStudentDto: CreateStudentDto) {
    const student = this.studentRepository.create(createStudentDto);
    return this.studentRepository.save(student);
  }

  async update(id: number, updateStudentDto: UpdateStudentDto) {
    await this.findOne(id);
    await this.studentRepository.update(id, updateStudentDto);
    return this.studentRepository.findOneBy({ id });
  }

  async remove(id: number) {
    await this.findOne(id);
    await this.studentRepository.delete(id);
    return { message: 'Student deleted successfully' };
  }
}
