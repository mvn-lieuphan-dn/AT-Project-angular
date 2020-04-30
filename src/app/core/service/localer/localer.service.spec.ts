import { TestBed } from '@angular/core/testing';

import { LocalerService } from './localer.service';

describe('LocalerService', () => {
  let service: LocalerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
