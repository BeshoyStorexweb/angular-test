import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';

import { Post } from 'src/app/models/posts';
import { PostsService } from 'src/app/services/posts/posts.service';
import { PostComponent } from '../post/post.component';
import { PostsComponent } from './posts.component';

describe('PostsComponent', () => {
  let posts: Post[];
  let component: PostsComponent;
  let fixture: ComponentFixture<PostsComponent>;
  let mockPostService;

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

    TestBed.configureTestingModule({
      declarations: [PostsComponent, PostComponent],
      providers: [{ provide: PostsService, useValue: mockPostService }],
    });

    fixture = TestBed.createComponent(PostsComponent);
    component = fixture.componentInstance;
    // postService = fixture.debugElement.injector.get(PostsService);
  });

  it('should create same exact same number of post component with posts', () => {
    mockPostService['getPosts'].and.returnValue(of(posts));
    // will call ngoninit
    fixture.detectChanges();
    const postElement = fixture.debugElement.queryAll(
      By.directive(PostComponent)
    );
    expect(postElement.length).toEqual(posts.length);
  });

  it('Should set post from service directly', () => {
    mockPostService['getPosts'].and.returnValue(of(posts));
    fixture.detectChanges();
    component.posts = posts;
    expect(component.posts.length).toBeGreaterThan(1);
  });

  it('should create one post child element for each post', () => {
    mockPostService['getPosts'].and.returnValue(of(posts));
    fixture.detectChanges();
    const debugElement = fixture.debugElement;
    const postElement = debugElement.queryAll(By.css('app-post'));
    expect(postElement.length).toBe(posts.length);
  });

  describe('delete', () => {
    it('Should delete selected post from posts', () => {
      mockPostService.deletePost.and.returnValue(of(true));
      component.posts = posts;
      component.delete(posts[1]);
      expect(component.posts.length).toBe(2);
    });
    it('Should call delete method only once', () => {
      // spyOn(postService, 'deletePost').and.callThrough();
      mockPostService.deletePost.and.returnValue(of(true));
      component.posts = posts;
      component.delete(posts[1]);
      expect(mockPostService.deletePost).toHaveBeenCalledTimes(1);
    });
    it('Should delete correct post', () => {
      // spyOn(postService, 'deletePost').and.callThrough();
      mockPostService.deletePost.and.returnValue(of(true));
      component.posts = posts;
      component.delete(posts[1]);
      for (let post of component.posts) {
        expect(post).not.toEqual(posts[1]);
      }
    });

    it('Should call delete method when post component btn is clicked', () => {
      spyOn(component, 'delete');
      mockPostService['getPosts'].and.returnValue(of(posts));
      fixture.detectChanges();
      const postComponent = fixture.debugElement.queryAll(
        By.directive(PostComponent)
      );
      postComponent[0]
        .query(By.css('button'))
        .triggerEventHandler('click', Event);
      expect(component.delete).toHaveBeenCalledWith(posts[0]);
    });
  });

  it('Should check whether exact post is sending to PostComponent', () => {
    mockPostService['getPosts'].and.returnValue(of(posts));
    fixture.detectChanges();
    const postComponent = fixture.debugElement.queryAll(
      By.directive(PostComponent)
    );

    for (let i = 0; i < PostComponent.length; i++) {
      let postComponentInstance = postComponent[i]
        .componentInstance as PostComponent;

      expect(postComponentInstance.post).toEqual(posts[i]);
    }
  });

  it('should call event emitter when delete event is emitted', () => {
    spyOn(component, 'delete');
    mockPostService.getPosts.and.returnValue(of(posts));
    fixture.detectChanges();
    let postComponent = fixture.debugElement.queryAll(
      By.directive(PostComponent)
    );
    (postComponent[0].componentInstance as PostComponent).delete.emit(
      undefined
    );
    expect(component.delete).toHaveBeenCalledOnceWith(posts[0]);
  });
});
