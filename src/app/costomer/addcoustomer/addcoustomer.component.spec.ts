import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcoustomerComponent } from './addcoustomer.component';

describe('AddcoustomerComponent', () => {
  let component: AddcoustomerComponent;
  let fixture: ComponentFixture<AddcoustomerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddcoustomerComponent]
    });
    fixture = TestBed.createComponent(AddcoustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
