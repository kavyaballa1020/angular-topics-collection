import { TestBed } from '@angular/core/testing';

import { KavService } from './kav.service';

describe('KavService', () => {
  let service: KavService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KavService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
