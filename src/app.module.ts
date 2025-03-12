import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskController } from './tasks/task.controller';
import { TasksModule } from './tasks/tasks.module';


@Module({
  imports: [TasksModule],
  controllers: [AppController, TaskController],
  providers: [AppService],
})
export class AppModule { }
