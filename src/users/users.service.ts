import { Injectable, BadRequestException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(createUserDto: CreateUserDto): Promise<any> {
    const createdUser = new this.userModel(createUserDto);
    bcrypt.hash(createdUser.password, 10, function (err, hash) {
      // Store hash in your password DB.
      createdUser.password = hash;
      return createdUser.save();
    });
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async findUserByEmail(email) {
    if (!email) {
      return new BadRequestException();
    }
    return this.userModel.findOne(email);
  }

  async findOne(id: string) {
    if (!id) {
      throw new BadRequestException();
    }
    const user = this.userModel.findById(id);
    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    if (!id) {
      throw new BadRequestException();
    }
    return this.userModel.findByIdAndUpdate(id, {
      $set: { ...updateUserDto },
    });
  }

  async remove(id: string) {
    if (!id) {
      throw new BadRequestException();
    }
    return this.userModel.findByIdAndRemove(id);
  }
}
