import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SharedModule } from './shared/shared.module';
import { BlockModule } from './block/block.module';
import { AccountModule } from './account/account.module';
import { WalletModule } from './wallet/wallet.module';
import { ContractModule } from './contract/contract.module';
import { CourseController } from './course/course.controller';
import { CourseService } from './course/course.service';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { IpfsController } from './ipfs/ipfs.controller';
import { IpfsService } from './ipfs/ipfs.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SharedModule,
    BlockModule,
    AccountModule,
    WalletModule,
    ContractModule,
  ],
  controllers: [AppController, CourseController, UsersController, IpfsController],
  providers: [AppService, CourseService, UsersService, IpfsService],
})
export class AppModule {}
