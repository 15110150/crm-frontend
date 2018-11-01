import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPotentialStudentComponent } from './list-potential-student.component';

describe('ListPotentialStudentComponent', () => {
  let component: ListPotentialStudentComponent;
  let fixture: ComponentFixture<ListPotentialStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPotentialStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPotentialStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
