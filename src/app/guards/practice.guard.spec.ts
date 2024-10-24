import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { practiceGuard } from './practice.guard';

describe('practiceGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => practiceGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
