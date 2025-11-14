import { TestBed } from '@angular/core/testing';

import { UserFosterService } from './user-foster.service';

describe('UserFosterService', () => {
  let service: UserFosterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserFosterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
