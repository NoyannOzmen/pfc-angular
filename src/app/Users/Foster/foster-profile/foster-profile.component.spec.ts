import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FosterProfileComponent } from './foster-profile.component';

describe('FosterProfileComponent', () => {
  let component: FosterProfileComponent;
  let fixture: ComponentFixture<FosterProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FosterProfileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FosterProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
