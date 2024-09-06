import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { LevelModule } from './level/level.module';

@Module({
  imports: [UsersModule, LevelModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

