import { of } from 'rxjs';
import { Post } from 'src/app/models/posts';
import { PostsService } from 'src/app/services/posts/posts.service';
import { PostsComponent } from './posts.component';

describe('PostsComponent', () => {
  let posts: Post[];
  let component: PostsComponent;
  let mockPostService: any;
  beforeEach(() => {
    posts = [
      {
        id: 1,
        body: 'body1',
        title: 'asdasd',
      },
      {
        id: 2,
        body: 'body2',
        title: 'title2',
      },
      {
        id: 3,
        body: 'body3',
        title: 'title3',
      },
    ];

    mockPostService = jasmine.createSpyObj(PostsService, [
      'getPosts',
      'deletePost',
    ]);

    component = new PostsComponent(mockPostService);
  });

  describe('delete', () => {
    it('Should delete selected post from posts', () => {
      mockPostService.deletePost.and.returnValue(of(true));
      component.posts = posts;
      component.delete(posts[1]);
      expect(component.posts.length).toBe(2);
    });
    it('Should call delete method only once', () => {
      mockPostService.deletePost.and.returnValue(of(true));
      component.posts = posts;
      component.delete(posts[1]);
      expect(mockPostService.deletePost).toHaveBeenCalledTimes(1);
    });
    it('Should delete correct post', () => {
      mockPostService.deletePost.and.returnValue(of(true));
      component.posts = posts;
      component.delete(posts[1]);
      for (let post of component.posts) {
        expect(post).not.toEqual(posts[1]);
      }
    });
  });
});
