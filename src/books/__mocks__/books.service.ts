import { bookDummy } from '../dummy/books.dummy';

export const BooksService = jest.fn().mockReturnValue({
  create: jest.fn().mockResolvedValue(bookDummy()),
  findAll: jest.fn().mockResolvedValue([bookDummy()]),
  findOne: jest.fn().mockResolvedValue(bookDummy()),
  update: jest.fn().mockResolvedValue(bookDummy()),
  remove: jest.fn().mockResolvedValue(bookDummy()),
});
