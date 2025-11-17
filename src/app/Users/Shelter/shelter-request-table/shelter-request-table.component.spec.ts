import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShelterRequestTableComponent } from './shelter-request-table.component';

describe('ShelterRequestTableComponent', () => {
  let component: ShelterRequestTableComponent;
  let fixture: ComponentFixture<ShelterRequestTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShelterRequestTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShelterRequestTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
