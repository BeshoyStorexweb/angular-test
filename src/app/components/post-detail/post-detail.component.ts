import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/posts';
import { PostsService } from 'src/app/services/posts/posts.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss'],
})
export class PostDetailComponent implements OnInit {
  post: Post;
  constructor(
    private activatedRoute: ActivatedRoute,
    private postService: PostsService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getPost();
  }

  getPost() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    id && this.postService.getPost(+id).subscribe((p) => (this.post = p));
  }

  save() {
    this.postService.updatePost(this.post).subscribe(() => this.goBack());
  }

  goBack() {
    this.location.back();
  }
}
