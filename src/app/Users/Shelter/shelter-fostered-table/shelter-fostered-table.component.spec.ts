import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShelterFosteredTableComponent } from './shelter-fostered-table.component';

describe('ShelterFosteredTableComponent', () => {
  let component: ShelterFosteredTableComponent;
  let fixture: ComponentFixture<ShelterFosteredTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShelterFosteredTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShelterFosteredTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
