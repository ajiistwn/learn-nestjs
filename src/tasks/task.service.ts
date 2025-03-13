import { Injectable } from "@nestjs/common";
import { TaskRepository } from "./task.repository";

@Injectable()
export class TaskService {
    constructor(private taskRepository: TaskRepository) { }

    async findAll() {
        return this.taskRepository.findAll();
    }

    async findOne(id: number) {
        return this.taskRepository.findOne(id);
    }

    async create(task: string) {
        return this.taskRepository.create(task);
    }
} 