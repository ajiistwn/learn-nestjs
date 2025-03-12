import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateTaskDto } from './dtos/create-task.dto';

@Controller('tasks')
export class TaskController {
    @Get()
    findAll() {
        return 'This action returns all tasks';
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return `This action returns a task with id: ${id}`;

    }

    @Post()
    create(@Body() body: CreateTaskDto) {
        return body;
    }

}
