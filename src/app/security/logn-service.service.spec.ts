import { TestBed } from '@angular/core/testing';

import { LognServiceService } from './logn-service.service';

describe('LognServiceService', () => {
  let service: LognServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LognServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
