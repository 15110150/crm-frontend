import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLecturerComponent } from './list-lecturer.component';

describe('ListLecturerComponent', () => {
  let component: ListLecturerComponent;
  let fixture: ComponentFixture<ListLecturerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListLecturerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLecturerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
