import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditecoustComponent } from './editecoust.component';

describe('EditecoustComponent', () => {
  let component: EditecoustComponent;
  let fixture: ComponentFixture<EditecoustComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditecoustComponent]
    });
    fixture = TestBed.createComponent(EditecoustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
