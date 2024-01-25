import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcoustComponent } from './viewcoust.component';

describe('ViewcoustComponent', () => {
  let component: ViewcoustComponent;
  let fixture: ComponentFixture<ViewcoustComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewcoustComponent]
    });
    fixture = TestBed.createComponent(ViewcoustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
