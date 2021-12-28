import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';
import { Movie, MovieSchema } from './schema/movie.schema';

@Module({
  imports: [
    MongooseModule.forFeature(
      [
        {
          name: Movie.name,
          schema: MovieSchema,
        },
      ],
      'movies',
    ),
  ],
  controllers: [MoviesController],
  providers: [MoviesService], //nestjs가 movieservice를 import하고 controller에 inject 한다.
})
export class MoviesModule {}
