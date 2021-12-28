import { Injectable } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Movie, MovieDocument } from './schema/movie.schema';
import { Connection, Model } from 'mongoose';

@Injectable()
export class MoviesService {
  constructor(
    @InjectModel(Movie.name) private movieModel: Model<MovieDocument>,
    @InjectConnection('movies') private connection: Connection,
  ) {}

  async create(movieData: CreateMovieDto): Promise<Movie> {
    return new this.movieModel(movieData).save();
  }

  getAll(): Promise<Movie[]> {
    return this.movieModel.find().exec(); //Real database 사용시 query가 오는 부분
  }

  async getOne(id: string): Promise<Movie> {
    // const movie = this.movieModel.find((movieModel) => movieModel.id);
    // if (!movie) {
    //   throw new NotFoundException(`Movie with id ${id} is not found`);
    // }
    console.log("get one service good");
    return await this.movieModel.findOne({ id });
  }

  deleteOne(id: string) {
    this.getOne(id);
    return this.movieModel.remove(id);
  }

  // update(id: number, updateData: UpdateMovieDto) {
  //   const movie = this.getOne(id);
  //   this.deleteOne(id);
  //   this.movies.push({ ...movie, ...updateData });
}
