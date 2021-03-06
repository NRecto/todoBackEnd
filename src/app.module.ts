import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TasksModule } from './tasks/tasks.module';
import config from './config/keys';

@Module({
  imports: [MongooseModule.forRoot(config.mongoURI), TasksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
