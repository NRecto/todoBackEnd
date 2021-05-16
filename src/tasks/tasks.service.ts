import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Task, TasksDocument } from './schema/tasks.schema';
@Injectable()
export class TasksService {
  constructor(@InjectModel('Task') private tasksModel: Model<TasksDocument>) {}

  async getAll() {
    return await this.tasksModel.find();
  }

  async getOneTask(id: string) {
    return await this.tasksModel.findOne({ _id: id });
  }

  async createTask(task: Task) {
    const newTask = new this.tasksModel(task);
    return await newTask.save();
  }

  async updateTask(id: string, task: Task) {
    const newTask = this.tasksModel.findByIdAndUpdate(id, task, { new: true });
    return newTask;
  }

  async deleteTask(id: string) {
    await this.tasksModel.findByIdAndRemove(id);
    return 'Task Deleted!';
  }
}
