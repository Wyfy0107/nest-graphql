import { forwardRef, Module } from '@nestjs/common';

import { AuthorsResolver } from './authors.resolver';
import { PostsModule } from './../posts/posts.module';
import { AuthorsService } from './authors.service';

@Module({
  imports: [forwardRef(() => PostsModule)],
  providers: [AuthorsService, AuthorsResolver],
  exports: [AuthorsService],
})
export class AuthorsModule {}
