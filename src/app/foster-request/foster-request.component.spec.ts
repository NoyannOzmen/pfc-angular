import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FosterRequestComponent } from './foster-request.component';

describe('FosterRequestComponent', () => {
  let component: FosterRequestComponent;
  let fixture: ComponentFixture<FosterRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FosterRequestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FosterRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
