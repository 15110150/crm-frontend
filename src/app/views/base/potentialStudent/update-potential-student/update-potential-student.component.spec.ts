import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePotentialStudentComponent } from './update-potential-student.component';

describe('UpdatePotentialStudentComponent', () => {
  let component: UpdatePotentialStudentComponent;
  let fixture: ComponentFixture<UpdatePotentialStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatePotentialStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePotentialStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
