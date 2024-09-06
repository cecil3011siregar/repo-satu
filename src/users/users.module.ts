import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users_service';
// import { LevelService } from 'src/level/level.service';
import { LevelModule } from 'src/level/level.module';

@Module({
    imports: [LevelModule],
    exports: [],
    controllers: [UsersController],
    providers: [UsersService]
})
export class UsersModule {}
