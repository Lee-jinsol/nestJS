import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MovieDocument = Movie & Document;

@Schema()
export class Movie {
  @Prop()
  id: string;

  @Prop()
  title: string;

  @Prop()
  year: number;

  @Prop()
  genres: string[];
}

export const MovieSchema = SchemaFactory.createForClass(Movie);
