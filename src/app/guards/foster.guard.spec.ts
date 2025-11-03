import { TestBed } from '@angular/core/testing';
import { CanActivateChildFn } from '@angular/router';

import { fosterGuard } from './foster.guard';

describe('fosterGuard', () => {
  const executeGuard: CanActivateChildFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => fosterGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
