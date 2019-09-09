import { TestBed } from '@angular/core/testing';

import { WikipediaApiService } from './wikipedia-api.service';

describe('WikipediaApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WikipediaApiService = TestBed.get(WikipediaApiService);
    expect(service).toBeTruthy();
  });
});
