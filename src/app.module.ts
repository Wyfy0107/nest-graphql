import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

import { AuthorsModule } from './authors/authors.module';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [
    AuthorsModule,
    PostsModule,
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
  ],
  controllers: [],
})
export class AppModule {}
