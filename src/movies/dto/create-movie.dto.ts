import { IsNumber, IsOptional, IsString } from 'class-validator'; // class-validator 좋다.

export class CreateMovieDto {
  @IsString()
  @IsOptional()
  title: string;
  @IsNumber()
  @IsOptional()
  year: number;
  @IsString()
  @IsOptional()
  genres: string[];
}
