import { TestBed } from '@angular/core/testing';

import { UserShelterService } from './user-shelter.service';

describe('UserShelterService', () => {
  let service: UserShelterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserShelterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
