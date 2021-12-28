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
    return await new this.movieModel(movieData).save();
  }

  async getAll(): Promise<Movie[]> {
    return await this.movieModel.find().exec(); //Real database 사용시 query가 오는 부분
  }

  async getOne(id: string): Promise<Movie> {
    console.log('get one service good');
    return await this.movieModel.findById(id);
  }

  async deleteOne(id: string): Promise<Movie> {
    return await this.movieModel.findByIdAndRemove(id);
    console.log('삭제완료');
  }

  async update(id: string, updateData: CreateMovieDto) {
    return await this.movieModel.findByIdAndUpdate(id, updateData, {
      new: true,
    });
  }
}
