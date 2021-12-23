import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';
import { UpdateMovieDto } from './dto/update-movie.dto';


@Controller('movies')
export class MoviesController {

    constructor(private readonly movieService : MoviesService ){} //constructor는 movieService라는 클래스를 갖게 됨 
    @Get()
    getAll() : Movie[] {
        return this.movieService.getAll();
    }

    @Get('/:id')
    getOne(@Param('id') movieid:number) : Movie {
        return this.movieService.getOne(movieid);
    }

    @Post()
    create(@Body() movieData: CreateMovieDto){
        return this.movieService.create(movieData);
    }

    @Delete('/:id')
    remove(@Param('id') movieid:number){
        return this.movieService.deleteOne(movieid);
    }

    @Patch('/:id')
    patch(@Param('id') movieid:number, @Body() updateData:UpdateMovieDto){
        return this.movieService.update(movieid, updateData);
        
    }


}
