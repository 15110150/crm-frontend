import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeKindComponent } from './employee-kind.component';

describe('EmployeeKindComponent', () => {
  let component: EmployeeKindComponent;
  let fixture: ComponentFixture<EmployeeKindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeKindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeKindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
