import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { of } from 'rxjs';
import { PostsService } from './posts.service';

describe('PostService', () => {
  let httpClientSpyObj;
  let postService: PostsService;
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
    httpClientSpyObj = jasmine.createSpyObj('HttpClient', ['get']);
    TestBed.configureTestingModule({
      providers: [
        PostsService,
        {
          provide: HttpClient,
          useValue: httpClientSpyObj,
        },
      ],
    });
    // postService = new PostsService(httpClientSpy);
    postService = TestBed.inject(PostsService);
    // httpClientSpy = TestBed.inject(HttpClient);
  });

  describe('getPosts()', () => {
    it('should return expected posts when it called', () => {
      httpClientSpyObj['get'].and.returnValue(of(posts));
      postService.getPosts().subscribe((posts) => expect(posts).toEqual(posts));
      expect(httpClientSpyObj.get).toHaveBeenCalledTimes(1);
    });
  });
});
