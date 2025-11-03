import { TestBed } from '@angular/core/testing';
import { CanActivateChildFn } from '@angular/router';

import { shelterGuard } from './shelter.guard';

describe('shelterGuard', () => {
  const executeGuard: CanActivateChildFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => shelterGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
