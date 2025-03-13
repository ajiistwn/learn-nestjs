import { Controller, Get, Post, Put, Delete, Body, Param, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dtos/create-task.dto';
import { TaskService } from './task.service';

@Controller('tasks')
export class TaskController {

    constructor(private readonly taskService: TaskService) {

    }

    @Get()
    findAll() {
        return this.taskService.findAll();
    }

    @Get('/:id')
    async findOne(@Param('id') id: string) {
        const task = await this.taskService.findOne(parseInt(id));
        if (!task) {
            throw new NotFoundException(`Task with ID ${id} not found`);
        }
        return task;

    }

    @Post()
    create(@Body() body: CreateTaskDto) {
        return this.taskService.create(body.content);
    }

}
