import { HttpClient, HttpClientModule } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
let testUrl = '/data';
interface Data {
  name: string;
}
describe('HttpClientTestingModule', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });
  it('should call testUrl with get request', () => {
    const testData = { name: 'asd' };
    httpClient
      .get<Data>(testUrl)
      .subscribe((data) => expect(data).toEqual(testData));
    const request = httpTestingController.expectOne('/data');
    request.flush(testData);
  });
});
