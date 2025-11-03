import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShelterRequestDetailsComponent } from './shelter-request-details.component';

describe('ShelterRequestDetailsComponent', () => {
  let component: ShelterRequestDetailsComponent;
  let fixture: ComponentFixture<ShelterRequestDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShelterRequestDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShelterRequestDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
