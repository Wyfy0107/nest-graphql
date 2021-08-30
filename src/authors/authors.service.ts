import { Injectable } from '@nestjs/common';
import { Author } from './author.model';

@Injectable()
export class AuthorsService {
  private authors: Author[] = [
    { id: 1, firstName: 'a', lastName: 'b', posts: [1] },
  ];

  findOneById(id: number) {
    return this.authors.find((author) => author.id === id);
  }
}
