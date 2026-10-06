import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
import { DatabaseModule } from '../db/database.module';

@Module({
  providers: [UserService, UserRepository, DatabaseModule],
  controllers: [UserController]
})
export class UserModule {}
