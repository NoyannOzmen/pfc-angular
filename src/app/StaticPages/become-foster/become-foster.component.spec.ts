import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BecomeFosterComponent } from './become-foster.component';

describe('BecomeFosterComponent', () => {
  let component: BecomeFosterComponent;
  let fixture: ComponentFixture<BecomeFosterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BecomeFosterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BecomeFosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
