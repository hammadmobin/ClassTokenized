import {
    Body,
    Controller,
    Get,
    HttpException,
    Param,
    Post,
  } from '@nestjs/common';

import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { IpfsService } from './ipfs.service';

@Controller('ipfs')
@ApiTags('ipfs')
export class IpfsController {

    @Get('list')
    @ApiOperation({
      summary: 'Database contents',
      description: 'Gets the Database contents of this server',
    })
    @ApiResponse({
      status: 200,
      description: 'Database contents',
    })
    @ApiResponse({
      status: 503,
      description: 'The server is not configured correctly',
      type: HttpException,
    })
    async getAllData() {
      try {
        // TODO
      } catch (error) {
        throw new HttpException(error.message, 503);
      }
    }
  
    @Get('ipfs-status')
    @ApiOperation({
      summary: 'IPFS node connection',
      description: 'Returns true if the IPFS Node configured is running',
    })
    @ApiResponse({
      status: 200,
      description: 'IPFS Node connection',
      type: Boolean,
    })
    async ipfsOnline() {
      try {
        //TODO
      } catch (error) {
        return error;
      }
    }
  
    @Get(':id')
    @ApiOperation({
      summary: 'Get element by id from the server',
      description: 'Gets the element at the requested index',
    })
    @ApiResponse({
      status: 200,
      description: 'Element',
    })
    @ApiResponse({
      status: 503,
      description: 'The server is not configured correctly',
      type: HttpException,
    })
    async getData(@Param('id') id: number) {
      try {
        // TODO
      } catch (error) {
        throw new HttpException(error.message, 503);
      }
    }
  
    @Get('server-get/:id')
    @ApiOperation({
      summary: 'Get file of element by id from server storage',
      description: 'Gets the file of element at the requested index',
    })
    @ApiResponse({
      status: 200,
      description: 'Element file',
    })
    @ApiResponse({
      status: 503,
      description: 'The server is not configured correctly',
      type: HttpException,
    })
    async getFile() {
      try {
        // TODO
      } catch (error) {
        throw new HttpException(error.message, 503);
      }
    }
  
    @Get('ipfs-get/:id')
    @ApiOperation({
      summary: 'Get file of element by id from ipfs',
      description: 'Gets the file of element at the requested index',
    })
    @ApiResponse({
      status: 200,
      description: 'Element file',
    })
    @ApiResponse({
      status: 503,
      description: 'The server is not configured correctly',
      type: HttpException,
    })
    async getFileIpfs() {
      try {
        // TODO
      } catch (error) {
        console.error(error);
        throw new HttpException(error.message, 503);
      }
    }
  
    @Post('upload')
    @ApiOperation({
      summary: 'Register file',
      description: 'Registers a file in the database',
    })
    @ApiResponse({
      status: 200,
      description: 'File registered',
    })
    @ApiResponse({
      status: 503,
      description: 'Server Error',
      type: HttpException,
    })
    async uploadFile() {
        try {
          // TODO
        } catch (error) {
          console.error(error);
          throw new HttpException(error.message, 503);
        }
    }
  
    @Post('metadata')
    @ApiOperation({
      summary: 'Register file metadata',
      description: 'Registers a metadata for a file',
    })
    @ApiResponse({
      status: 200,
      description: 'Metadata registered',
    })
    @ApiResponse({
      status: 503,
      description: 'Server Error',
      type: HttpException,
    })
    async metadata() {
        try {
          // TODO
        } catch (error) {
          console.error(error);
          throw new HttpException(error.message, 503);
        }
    }
  
    @Post('ipfs-save')
    @ApiOperation({
      summary: 'Register file metadata',
      description: 'Registers a metadata for a file',
    })
    @ApiResponse({
      status: 200,
      description: 'Metadata registered',
    })
    @ApiResponse({
      status: 503,
      description: 'Server Error',
      type: HttpException,
    })
    async ipfsSave() {
        try {
          // TODO
        } catch (error) {
          console.error(error);
          throw new HttpException(error.message, 503);
        }
    }

}
