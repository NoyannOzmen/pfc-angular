import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShelterUploadComponent } from './shelter-upload.component';

describe('ShelterUploadComponent', () => {
  let component: ShelterUploadComponent;
  let fixture: ComponentFixture<ShelterUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShelterUploadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShelterUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
