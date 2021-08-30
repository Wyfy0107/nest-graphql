import { Injectable } from '@nestjs/common';
import { Post } from './post.model';

@Injectable()
export class PostsService {
  private posts: Post[] = [{ id: 1, title: 'hello', author: 1 }];

  findOneById(id: number) {
    return this.posts.find((post) => post.id === id);
  }

  findAllByAuthor(authorId: number) {
    return this.posts.filter((post) => post.author === authorId);
  }

  findAll() {
    return this.posts;
  }
}
