import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { first } from 'rxjs';
import { Post } from 'src/app/models/posts';
import { PostComponent } from './post.component';

describe('PostCompoent', () => {
  let fixture: ComponentFixture<PostComponent>;
  let component: PostComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostComponent],
      imports: [RouterTestingModule],
    });
    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;
  });
  it('Should create post component with test bed', () => {
    expect(component).toBeDefined();
  });
  it('should fire event when delete post is clicked', () => {
    const post: Post = { id: 1, body: 'asd', title: 'asd' };
    component.post = post;
    component.delete.pipe(first()).subscribe((p) => expect(p).toEqual(post));
    // component.onDeletePost();
  });

  it('Should render the post title in anchore element', () => {
    const post: Post = { id: 1, body: 'body1', title: 'title' };
    component.post = post;
    fixture.detectChanges();
    const postElement = fixture.debugElement;
    const aElement: HTMLElement = postElement.query(By.css('a')).nativeElement;
    expect(aElement?.textContent).toEqual(post.title);
  });
});
