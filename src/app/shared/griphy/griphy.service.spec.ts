import { TestBed } from '@angular/core/testing';

import { GriphyService } from './griphy.service';

describe('GriphyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GriphyService = TestBed.get(GriphyService);
    expect(service).toBeTruthy();
  });
});
