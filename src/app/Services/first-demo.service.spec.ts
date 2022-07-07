import { TestBed } from '@angular/core/testing';

import { FirstDemoService } from './first-demo.service';

describe('FirstDemoService', () => {
  let service: FirstDemoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirstDemoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
