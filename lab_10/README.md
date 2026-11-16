# Lab 10 — PostgreSQL + TypeORM + NestJS

Student Course Management API: `Student 1 ──< Enrollment >── 1 Course`

## Run

1. Create a PostgreSQL database named `fullstack_lab10`.
2. Create a `.env` file:
   ```
   DB_PASSWORD=your_postgres_password
   ```
   (host, port, user and database default to `localhost`, `5432`, `postgres`, `fullstack_lab10`)
3. Install and start:
   ```bash
   npm install
   npm run start:dev
   ```

## Endpoints

- `/students`: GET, POST · `/students/:id`: GET, PATCH, DELETE
- `/courses`: GET, POST · `/courses/:id`: GET, PATCH, DELETE
- `/enrollments`: GET, POST · `/enrollments/:id`: GET

Example: `POST /enrollments` → `{ "studentId": 1, "courseId": 1, "grade": "A" }`
