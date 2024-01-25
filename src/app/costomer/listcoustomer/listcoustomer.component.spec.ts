import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcoustomerComponent } from './listcoustomer.component';

describe('ListcoustomerComponent', () => {
  let component: ListcoustomerComponent;
  let fixture: ComponentFixture<ListcoustomerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListcoustomerComponent]
    });
    fixture = TestBed.createComponent(ListcoustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
