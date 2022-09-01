import { first } from 'rxjs';
import { Post } from 'src/app/models/posts';
import { PostComponent } from './post.component';

describe('PostCompoent', () => {
  it('should fire event when delete post is clicked', () => {
    const comp = new PostComponent();
    const post: Post = { id: 1, body: 'asd', title: 'asd' };
    comp.post = post;
    comp.delete.pipe(first()).subscribe((p) => expect(p).toEqual(post));
    comp.onDeletePost();
  });
});
