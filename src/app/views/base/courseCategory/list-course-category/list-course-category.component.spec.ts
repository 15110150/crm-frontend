import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCourseCategoryComponent } from './list-course-category.component';

describe('ListCourseCategoryComponent', () => {
  let component: ListCourseCategoryComponent;
  let fixture: ComponentFixture<ListCourseCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCourseCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCourseCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
