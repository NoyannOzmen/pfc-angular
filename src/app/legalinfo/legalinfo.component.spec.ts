import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalinfoComponent } from './legalinfo.component';

describe('LegalinfoComponent', () => {
  let component: LegalinfoComponent;
  let fixture: ComponentFixture<LegalinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LegalinfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LegalinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
