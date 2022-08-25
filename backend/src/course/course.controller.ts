import {
    Body,
    Controller,
    Get,
    HttpException,
    Param,
    Post,
  } from '@nestjs/common';

import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CourseService } from './course.service';


@Controller('course')
@ApiTags('course')
export class CourseController {
    
    @Post('add-course')
    @ApiOperation({
      summary: 'Teacher add courses',
      description: 'Teacher have the option to create the courses',
    })
    @ApiResponse({
      status: 200,
      description: 'Add Courses',
      type: String,
    })
    @ApiResponse({
      status: 503,
      description:
        'Server Error',
      type: HttpException,
    })
    async addCourses() {
      try {
        // TODO
      } catch (error) {
        throw new HttpException(error.message, 503);
      }
    }
    
}
