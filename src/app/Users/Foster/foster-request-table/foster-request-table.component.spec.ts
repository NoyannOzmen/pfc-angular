import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FosterRequestTableComponent } from './foster-request-table.component';

describe('FosterRequestTableComponent', () => {
  let component: FosterRequestTableComponent;
  let fixture: ComponentFixture<FosterRequestTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FosterRequestTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FosterRequestTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
