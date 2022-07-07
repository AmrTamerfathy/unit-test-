import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpDataService } from './http-data.service';
import { PostModel } from './post.model';

describe('HttpDataService', () => {
  let dataService: HttpDataService;
  let httpTestCtrl:HttpTestingController
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [HttpDataService],
      imports: [HttpClientTestingModule],
    })
  );

  beforeEach(() => {
    dataService = TestBed.get(HttpDataService);
    httpTestCtrl=TestBed.get(HttpTestingController)
  });

  it('test getPostList', () => {
    const fakePosts: PostModel[] = [
      { id: 1, userId: 2, title: 'title 1', body: 'body 1' },
      { id: 2, userId: 3, title: 'title 2', body: 'body 2' },
    ];
    dataService.getPostList().subscribe((posts) => {
      expect(posts).toBe(fakePosts);
    });
  
   const req=httpTestCtrl.expectOne(dataService.BASE_URL+"posts")
   expect(req.request.responseType).toEqual("json")
    req.flush(fakePosts)
    httpTestCtrl.verify()
  });


  
});
