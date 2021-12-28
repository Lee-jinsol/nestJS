import { PartialType } from '@nestjs/mapped-types';
import { CreateMovieDto } from './create-movie.dto';

export class UpdateMovieDto extends PartialType(CreateMovieDto) {
  // updatemovieDto는 createMovieDto랑 같지만 전부 필수사항이 아니다.
  // @IsString()
  // readonly title?: string;
  // @IsNumber()
  // readonly year?: number;
  // @IsString({each: true})
  // readonly genres?:string[]; // ?을 사용함으로써 필수가 아니라고 정의했다.
}
