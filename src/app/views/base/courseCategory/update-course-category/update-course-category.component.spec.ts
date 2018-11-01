import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCourseCategoryComponent } from './update-course-category.component';

describe('UpdateCourseCategoryComponent', () => {
  let component: UpdateCourseCategoryComponent;
  let fixture: ComponentFixture<UpdateCourseCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateCourseCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCourseCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
