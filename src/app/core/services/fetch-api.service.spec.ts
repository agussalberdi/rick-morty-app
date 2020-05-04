import { TestBed } from '@angular/core/testing';

import { FetchApiService } from './fetch-api.service';

describe('FetchApiService', () => {
  let service: FetchApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
