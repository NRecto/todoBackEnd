import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { TasksDocument } from './schema/tasks.schema';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly taskService: TasksService) {}

  @Get()
  findAll(): Promise<TasksDocument[]> {
    return this.taskService.getAll();
  }
  @Get(':id')
  findOneTask(@Param('id') id) {
    return this.taskService.getOneTask(id);
  }

  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto): any {
    return this.taskService.createTask(createTaskDto);
  }

  @Put(':id')
  updateTask(@Param('id') id, @Body() updateTask: CreateTaskDto) {
    return this.taskService.updateTask(id, updateTask);
  }

  @Delete(':id')
  deleteTask(@Param('id') id) {
    return this.taskService.deleteTask(id);
  }
}
