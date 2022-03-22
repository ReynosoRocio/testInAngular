import { TestBed } from '@angular/core/testing';

import { ApiTweetsService } from './api-tweets.service';

describe('ApiTweetsService', () => {
  let service: ApiTweetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiTweetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
