import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FosterRegisterComponent } from './foster-register.component';

describe('FosterRegisterComponent', () => {
  let component: FosterRegisterComponent;
  let fixture: ComponentFixture<FosterRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FosterRegisterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FosterRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
