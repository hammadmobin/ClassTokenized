import {
    Body,
    Controller,
    Get,
    HttpException,
    Param,
    Post,
  } from '@nestjs/common';

import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UsersService } from './users.service';

@Controller('users')
@ApiTags('users')
export class UsersController {

    @Post('Buy-NFT')
    @ApiOperation({
      summary: 'Buy the NFT courses to enrolled',
      description: 'Student have the option to Buy the NFT for courses',
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
    async BuyNFT() {
      try {
        // TODO
      } catch (error) {
        throw new HttpException(error.message, 503);
      }
    }

    @Post('Transfer-NFT')
    @ApiOperation({
      summary: 'Transfer the NFT courses to enrolled',
      description: 'Student have the option to Transfer the NFT for courses',
    })
    @ApiResponse({
      status: 200,
      description: 'Transfer NFT',
      type: String,
    })
    @ApiResponse({
      status: 503,
      description:
        'Server Error',
      type: HttpException,
    })
    async TransferNFT() {
      try {
        // TODO
      } catch (error) {
        throw new HttpException(error.message, 503);
      }
    }

    @Post('Give-NFT')
    @ApiOperation({
      summary: 'Transfer the NFT courses to enrolled',
      description: 'Student have the option to Transfer the NFT for courses',
    })
    @ApiResponse({
      status: 200,
      description: 'Transfer NFT',
      type: String,
    })
    @ApiResponse({
      status: 503,
      description:
        'Server Error',
      type: HttpException,
    })
    async GiveNFT() {
      try {
        // TODO
      } catch (error) {
        throw new HttpException(error.message, 503);
      }
    }

}
