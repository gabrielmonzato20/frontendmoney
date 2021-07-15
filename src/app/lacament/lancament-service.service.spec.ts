import { TestBed } from '@angular/core/testing';

import { LancamentServiceService } from './lancament-service.service';

describe('LancamentServiceService', () => {
  let service: LancamentServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LancamentServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
