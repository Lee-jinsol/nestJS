import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MoviesModule } from './movies/movies.module';
import { MoviesService } from './movies/movies.service';

@Module({
  imports: [
    MoviesModule,
    MongooseModule.forRoot('mongodb://localhost:27017/databasename', {
      connectionName: 'movies',
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
