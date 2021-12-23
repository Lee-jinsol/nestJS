import { Module } from '@nestjs/common';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';

@Module({
    controllers: [MoviesController],
    providers: [MoviesService] //nestjs가 movieservice를 import하고 controller에 inject(주입)한다.
})
export class MoviesModule {}
