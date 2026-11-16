import { IsEmail, IsInt, IsNotEmpty, IsString, Min } from 'class-validator';

export class CreateStudentDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsInt()
  @Min(16)
  age: number;
}
