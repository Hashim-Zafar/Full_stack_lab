import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentsModule } from './students/students.module';
import { CoursesModule } from './courses/courses.module';
import { EnrollmentsModule } from './enrollments/enrollments.module';

@Module({
  imports: [
    // Loads values from the .env file (DB password etc.)
    ConfigModule.forRoot({ isGlobal: true }),

    // Connects NestJS to the local PostgreSQL database (fullstack_lab10)
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        host: config.get<string>('DB_HOST', 'localhost'),
        port: Number(config.get('DB_PORT', 5432)),
        username: config.get<string>('DB_USERNAME', 'postgres'),
        password: config.get<string>('DB_PASSWORD', 'postgres123'),
        database: config.get<string>('DB_NAME', 'fullstack_lab10'),
        autoLoadEntities: true,
        // OK for this lab only. Never use synchronize: true in production.
        synchronize: true,
      }),
    }),

    StudentsModule,
    CoursesModule,
    EnrollmentsModule,
  ],
})
export class AppModule {}
