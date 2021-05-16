import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TasksDocument = Task & Document;

@Schema()
export class Task {
  @Prop()
  task: string;
}

export const TasksSchema = SchemaFactory.createForClass(Task);
