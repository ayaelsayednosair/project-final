import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryesComponent } from './categoryes.component';

describe('CategoryesComponent', () => {
  let component: CategoryesComponent;
  let fixture: ComponentFixture<CategoryesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryesComponent]
    });
    fixture = TestBed.createComponent(CategoryesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
