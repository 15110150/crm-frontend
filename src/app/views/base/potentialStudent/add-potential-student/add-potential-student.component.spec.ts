import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPotentialStudentComponent } from './add-potential-student.component';

describe('AddPotentialStudentComponent', () => {
  let component: AddPotentialStudentComponent;
  let fixture: ComponentFixture<AddPotentialStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPotentialStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPotentialStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
