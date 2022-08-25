import { Module } from '@nestjs/common';
import { CourseService } from './course.service';
import { CourseController } from './course.controller';

@Module({
    controllers: [CourseService],
    providers: [CourseController]
})
export class CourseModule {}
