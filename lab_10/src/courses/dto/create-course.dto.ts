import { IsInt, IsNotEmpty, IsString, Max, Min } from 'class-validator';

export class CreateCourseDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  code: string;

  @IsInt()
  @Min(1)
  @Max(6)
  creditHours: number;
}
