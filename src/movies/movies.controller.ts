import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly movieService: MoviesService) {} //constructor는 movieService라는 클래스를 갖게 됨
  @Get()
  getAll() {
    console.log('Get good');
    return this.movieService.getAll();
  }

  @Get('/:id')
  getOne(@Param('id') id: string) {
    console.log('Get one good');
    return this.movieService.getOne(id);
  }

  @Post()
  create(@Body() movieData: CreateMovieDto) {
    console.log('Post good');
    return this.movieService.create(movieData);
  }

  // @Delete('/:id')
  // remove(@Param('id') id: string) {
  //   return this.movieService.deleteOne(+id);
  // }

  // @Patch('/:id')
  // patch(@Param('id') movieid: number, @Body() updateData: UpdateMovieDto) {
  //   return this.movieService.update(movieid, updateData);
  // }
}
