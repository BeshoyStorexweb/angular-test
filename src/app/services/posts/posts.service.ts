import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from 'src/app/models/posts';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }

  getPost(postId: number) {
    return this.http.get<Post>(
      `https://jsonplaceholder.typicode.com/post/${postId}`
    );
  }

  deletePost(post: Post) {
    return this.http.delete(
      `https://jsonplaceholder.typicode.com/posts/${post.id}`
    );
  }
  updatePost(post: Post) {
    return this.http.put(
      `https://jsonplaceholder.typicode.com/posts/${post.id}`,
      post
    );
  }
}
