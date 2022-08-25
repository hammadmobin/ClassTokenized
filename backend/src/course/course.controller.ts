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
    
    @Get('Create-course')
    @ApiOperation({
      summary: 'Teacher Create courses',
      description: 'Teacher have the option to create the courses',
    })
    @ApiResponse({
      status: 200,
      description: 'Create Courses',
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
        return 'Hello World';
      } catch (error) {
        throw new HttpException(error.message, 503);
      }
    }
    
    @Post('update-course')
    @ApiOperation({
      summary: 'Teacher update courses',
      description: 'Teacher have the option to Update the courses',
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
    async updateCourses() {
      try {
        // TODO
      } catch (error) {
        throw new HttpException(error.message, 503);
      }
    }

}
