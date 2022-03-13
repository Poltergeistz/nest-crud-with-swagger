import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Book, BookDocument } from './schemas/book.schema';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { ApiOkResponse } from '@nestjs/swagger';

interface ErrorMessage {
  message: string;
}

const errorMessage: ErrorMessage = { message: 'This book ID was not found !' };

@Injectable()
export class BooksService {
  constructor(@InjectModel(Book.name) private bookModel: Model<BookDocument>) {}

  @ApiOkResponse({
    status: 201,
    description: 'Success ! The Book was created !',
  })
  async create(createBookDto: CreateBookDto): Promise<Book> {
    const createdBook = new this.bookModel(createBookDto);
    return createdBook.save();
  }

  async findAll(): Promise<Book[]> {
    return this.bookModel.find().exec();
  }

  async findOne(id: string): Promise<Book> {
    if (!id) {
      throw new NotFoundException(errorMessage);
    }
    return this.bookModel.findById(id);
  }

  @ApiOkResponse({ status: 204, description: 'The book was updated !' })
  async update(id: string, updateBookDto: UpdateBookDto): Promise<Book> {
    if (!id) {
      throw new NotFoundException(errorMessage);
    }
    return this.bookModel.findByIdAndUpdate(id, {
      $set: { ...updateBookDto },
    });
  }

  @ApiOkResponse({ status: 204, description: 'The book was deleted !' })
  async remove(id: string): Promise<Book> {
    if (!id) {
      throw new NotFoundException(errorMessage);
    }
    return this.bookModel.findByIdAndRemove(id);
  }
}
