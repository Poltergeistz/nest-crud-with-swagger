import { Book } from '../schemas/book.schema';

export const bookDummy = (): Book => {
  return {
    uuid: 'bd325337-8876-4148-9866-8c393461312a',
    title: 'Book Of Boba Fett',
    description: 'Story of Boba the bounty hunter',
    author: 'Jon',
  };
};
