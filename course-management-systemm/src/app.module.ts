import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CoursesModule } from './courses/courses.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest-course-management'),
    CoursesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
