import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Enrollment } from './enrollment.entity';
import { Student } from '../students/student.entity';
import { Course } from '../courses/course.entity';
import { CreateEnrollmentDto } from './dto/create-enrollment.dto';

@Injectable()
export class EnrollmentsService {
  constructor(
    @InjectRepository(Enrollment)
    private readonly enrollmentRepository: Repository<Enrollment>,
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
    @InjectRepository(Course)
    private readonly courseRepository: Repository<Course>,
  ) {}

  async create({ studentId, courseId, grade }: CreateEnrollmentDto) {
    // Make sure both sides of the relationship exist first
    if (!(await this.studentRepository.existsBy({ id: studentId }))) {
      throw new NotFoundException(`Student with id ${studentId} not found`);
    }
    if (!(await this.courseRepository.existsBy({ id: courseId }))) {
      throw new NotFoundException(`Course with id ${courseId} not found`);
    }

    const enrollment = this.enrollmentRepository.create({
      student: { id: studentId },
      course: { id: courseId },
      grade,
    });
    const saved = await this.enrollmentRepository.save(enrollment);
    return this.findOne(saved.id);
  }

  // relations: loads the linked student and course (a SQL JOIN)
  findAll() {
    return this.enrollmentRepository.find({
      relations: { student: true, course: true },
    });
  }

  async findOne(id: number) {
    const enrollment = await this.enrollmentRepository.findOne({
      where: { id },
      relations: { student: true, course: true },
    });
    if (!enrollment) {
      throw new NotFoundException(`Enrollment with id ${id} not found`);
    }
    return enrollment;
  }
}
