import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
// import { AppModule } from './app.module';


async function bootstrap() {
  const app = await NestFactory.create(TasksModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.PORT ?? 3000);
  console.log(`Application is running on: http://localhost:${process.env.PORT ?? 3000}`);
}
bootstrap();
