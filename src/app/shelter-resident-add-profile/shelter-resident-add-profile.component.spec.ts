import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShelterResidentAddProfileComponent } from './shelter-resident-add-profile.component';

describe('ShelterResidentAddProfileComponent', () => {
  let component: ShelterResidentAddProfileComponent;
  let fixture: ComponentFixture<ShelterResidentAddProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShelterResidentAddProfileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShelterResidentAddProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
