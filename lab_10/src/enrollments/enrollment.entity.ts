import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Student } from '../students/student.entity';
import { Course } from '../courses/course.entity';

@Entity()
export class Enrollment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  grade: string;

  // Many enrollments belong to one student (creates the studentId foreign key)
  @ManyToOne(() => Student, (student) => student.enrollments, {
    onDelete: 'CASCADE',
  })
  student: Student;

  // Many enrollments belong to one course (creates the courseId foreign key)
  @ManyToOne(() => Course, (course) => course.enrollments, {
    onDelete: 'CASCADE',
  })
  course: Course;
}
