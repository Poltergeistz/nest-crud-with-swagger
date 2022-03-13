import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

export type BookDocument = Book & Document;

@Schema({ collection: 'book' })
export class Book {
  @Prop({
    required: true,
    default: function genUUID() {
      return uuidv4();
    },
  })
  uuid: string;

  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  author: string;
}

export const BookSchema = SchemaFactory.createForClass(Book);
