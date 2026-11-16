import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Course } from './course.entity';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(Course)
    private readonly courseRepository: Repository<Course>,
  ) {}

  findAll() {
    return this.courseRepository.find();
  }

  async findOne(id: number) {
    const course = await this.courseRepository.findOneBy({ id });
    if (!course) {
      throw new NotFoundException(`Course with id ${id} not found`);
    }
    return course;
  }

  create(createCourseDto: CreateCourseDto) {
    const course = this.courseRepository.create(createCourseDto);
    return this.courseRepository.save(course);
  }

  async update(id: number, updateCourseDto: UpdateCourseDto) {
    await this.findOne(id);
    await this.courseRepository.update(id, updateCourseDto);
    return this.courseRepository.findOneBy({ id });
  }

  async remove(id: number) {
    await this.findOne(id);
    await this.courseRepository.delete(id);
    return { message: 'Course deleted successfully' };
  }
}
