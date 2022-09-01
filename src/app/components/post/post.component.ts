import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Post } from 'src/app/models/posts';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent {
  @Input() post!: Post;
  @Output() delete = new EventEmitter<Post>();

  constructor() {}

  onDeletePost() {
    this.delete.emit(this.post);
  }
}
