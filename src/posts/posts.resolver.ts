import {
  Resolver,
  Query,
  ResolveField,
  Args,
  Parent,
  Int,
} from '@nestjs/graphql';
import { Author } from 'src/authors/author.model';
import { AuthorsService } from 'src/authors/authors.service';

import { Post } from './post.model';
import { PostsService } from './posts.service';

@Resolver((of) => Post)
export class PostsResolver {
  constructor(
    private authorsService: AuthorsService,
    private postsService: PostsService,
  ) {}

  @Query((returns) => [Post], { name: 'posts' })
  async getAllPosts() {
    return this.postsService.findAll();
  }

  @Query((returns) => Post, { name: 'post' })
  async getPostById(@Args('id', { type: () => Int }) id: number) {
    return this.postsService.findOneById(id);
  }

  @ResolveField((returns) => Author, { name: 'author' })
  async getAuthorByPost(@Parent() post: Post) {
    const { author } = post;
    return this.authorsService.findOneById(author as number);
  }
}
