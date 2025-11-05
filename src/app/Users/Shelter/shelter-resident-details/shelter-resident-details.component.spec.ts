import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShelterResidentDetailsComponent } from './shelter-resident-details.component';

describe('ShelterResidentDetailsComponent', () => {
  let component: ShelterResidentDetailsComponent;
  let fixture: ComponentFixture<ShelterResidentDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShelterResidentDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShelterResidentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
