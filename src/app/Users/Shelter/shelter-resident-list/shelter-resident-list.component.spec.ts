import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShelterResidentListComponent } from './shelter-resident-list.component';

describe('ShelterResidentListComponent', () => {
  let component: ShelterResidentListComponent;
  let fixture: ComponentFixture<ShelterResidentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShelterResidentListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShelterResidentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
