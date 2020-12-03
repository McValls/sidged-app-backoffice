import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDetailTeachersTableComponent } from './course-detail-teachers-table.component';

describe('CourseDetailTeachersTableComponent', () => {
  let component: CourseDetailTeachersTableComponent;
  let fixture: ComponentFixture<CourseDetailTeachersTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseDetailTeachersTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseDetailTeachersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
