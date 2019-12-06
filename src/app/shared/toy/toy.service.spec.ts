import { TestBed } from '@angular/core/testing';

import { ToyService } from './toy.service';

describe('ToyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ToyService = TestBed.get(ToyService);
    expect(service).toBeTruthy();
  });
});
