import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PotentialStudentComponent } from './potential-student.component';

describe('PotentialStudentComponent', () => {
  let component: PotentialStudentComponent;
  let fixture: ComponentFixture<PotentialStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PotentialStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PotentialStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
