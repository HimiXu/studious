import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css'],
})
export class FeedComponent implements OnInit {
  constructor(private postsService: PostsService) {}

  ngOnInit(): void {}

  getPosts(): Post[] {
    return this.postsService.getPosts();
  }
}
