import { forwardRef, Module } from '@nestjs/common';

import { PostsResolver } from './posts.resolver';
import { AuthorsModule } from './../authors/authors.module';
import { PostsService } from './posts.service';

@Module({
  imports: [forwardRef(() => AuthorsModule)],
  providers: [PostsResolver, PostsService],
  exports: [PostsService],
})
export class PostsModule {}
