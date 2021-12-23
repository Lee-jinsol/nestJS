import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from './entities/movie.entity';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Injectable()
export class MoviesService {
      private movies: Movie[]=[];

      getAll(): Movie[] {
          return this.movies; //Real database 사용시 query가 오는 부분
      }

      getOne(id:number):Movie {
          const movie = this.movies.find(movie => movie.id)
          if(!movie){
              throw new NotFoundException(`Movie with id ${id} is not found`)
          }
          return movie;
      }

      deleteOne(id:number){
         this.getOne(id);
         this.movies = this.movies.filter(movie => movie.id );
      }

      create(movieData:CreateMovieDto){
          this.movies.push({
              id:this.movies.length + 1,
              ...movieData
          })
      }

      update(id:number, updateData:UpdateMovieDto){
          const movie = this.getOne(id);
          this.deleteOne(id);
          this.movies.push({...movie, ...updateData});
      }
}
