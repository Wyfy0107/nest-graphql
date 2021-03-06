import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Author } from 'src/authors/author.model';

@ObjectType()
export class Post {
  @Field((type) => Int)
  id: number;

  @Field()
  title: string;

  @Field((type) => Int, { nullable: true })
  votes?: number;

  @Field((type) => Author)
  author?: Author | number;
}
