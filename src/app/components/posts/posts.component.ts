import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/posts';
import { PostsService } from 'src/app/services/posts/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];
  constructor(private postService: PostsService) {}

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.postService.getPosts().subscribe((posts) => {
      this.posts = posts;
    });
  }

  delete(post: Post) {
    this.posts = this.posts.filter((p) => p.id !== post.id);
    this.postService.deletePost(post).subscribe();
  }
}
