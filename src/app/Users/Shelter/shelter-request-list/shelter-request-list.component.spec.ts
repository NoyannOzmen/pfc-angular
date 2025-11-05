import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShelterRequestListComponent } from './shelter-request-list.component';

describe('ShelterRequestListComponent', () => {
  let component: ShelterRequestListComponent;
  let fixture: ComponentFixture<ShelterRequestListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShelterRequestListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShelterRequestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
