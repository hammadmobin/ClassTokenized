import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

@Module({
    controllers: [UsersService],
    providers: [UsersController]
})
export class UsersModule {}
