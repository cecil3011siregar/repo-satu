import { Module } from '@nestjs/common';
import { LevelService } from './level.service';

@Module({
    imports: [],
    exports: [LevelService],
    providers: [LevelService]
})
export class LevelModule {}
