import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
import * as bcrypt from 'bcrypt';

export type UserDocument = User & Document;

@Schema({ collection: 'user' })
export class User {
  @Prop({
    required: true,
    default: function genUUID() {
      return uuidv4();
    },
  })
  uuid: string;

  @Prop()
  id: string;

  @Prop()
  email: string;

  @Prop({
    required: true,
  })
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
