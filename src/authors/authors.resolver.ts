import {
  Resolver,
  Query,
  ResolveField,
  Args,
  Parent,
  Int,
} from '@nestjs/graphql';

import { Author } from './author.model';
import { AuthorsService } from './authors.service';
import { PostsService } from 'src/posts/posts.service';
import { forwardRef, Inject } from '@nestjs/common';
import { Post } from 'src/posts/post.model';

@Resolver((of) => Author)
export class AuthorsResolver {
  constructor(
    private authorsService: AuthorsService,
    private postsService: PostsService,
  ) {}

  @Query((returns) => Author)
  async author(@Args('id', { type: () => Int }) id: number) {
    return this.authorsService.findOneById(id);
  }

  @ResolveField((returns) => [Post], { name: 'posts' })
  async getAllPostsByAuthor(@Parent() author: Author) {
    const { id } = author;
    return this.postsService.findAllByAuthor(id);
  }
}
