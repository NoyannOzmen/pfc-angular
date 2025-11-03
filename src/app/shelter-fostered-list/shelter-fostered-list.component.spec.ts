import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShelterFosteredListComponent } from './shelter-fostered-list.component';

describe('ShelterFosteredListComponent', () => {
  let component: ShelterFosteredListComponent;
  let fixture: ComponentFixture<ShelterFosteredListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShelterFosteredListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShelterFosteredListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
