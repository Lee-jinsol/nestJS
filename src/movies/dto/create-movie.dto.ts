import { IsNumber, IsOptional, IsString } from "class-validator"; // class-validator 좋다.

export class CreateMovieDto{
    @IsString()
    readonly title: string;
    @IsNumber()
    readonly year: number;
    @IsOptional()
    @IsString({each: true})
    readonly genres:string[];
}