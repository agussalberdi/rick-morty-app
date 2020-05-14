import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { FetchApiService } from './fetch-api.service';

describe('FetchApiService', () => {
  let service: FetchApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    });
    service = TestBed.inject(FetchApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
