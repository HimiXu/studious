import { Injectable } from '@angular/core';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor() {}

  getPosts(): Post[] {
    return [
      {
        id: 2,
        name: 'New Post',
        content:
          'just some random description just some random description just some random description',
      },
      {
        id: 1,
        name: 'Old Post',
        content: 'just some random description',
      },
    ];
  }
}
