import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { PostsService } from './posts.service';

describe('PostService HttpTesting', () => {
  let postsService: PostsService;
  let httpTestingCtrl: HttpTestingController;
  let posts = [
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
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostsService],
      imports: [HttpClientTestingModule],
    });

    postsService = TestBed.inject(PostsService);
    httpTestingCtrl = TestBed.inject(HttpTestingController);
  });
  describe('getPosts', () => {
    it('should get posts when getPosts() is called', (done: DoneFn) => {
      postsService.getPosts().subscribe((d) => {
        expect(d).toEqual(posts);
        done();
      });
      const request = httpTestingCtrl.expectOne(
        'https://jsonplaceholder.typicode.com/posts'
      );
      request.flush(posts);
    });
  });

  it('should getPost() return single post', () => {
    postsService.getPost(1).subscribe();
    // postsService.getPost(2).subscribe();

    const request = httpTestingCtrl.expectOne(
      'https://jsonplaceholder.typicode.com/post/1'
    );
    // httpTestingCtrl.verify();
  });
});
