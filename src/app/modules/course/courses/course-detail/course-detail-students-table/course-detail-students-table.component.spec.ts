import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDetailStudentsTableComponent } from './course-detail-students-table.component';

describe('CourseDetailStudentsTableComponent', () => {
  let component: CourseDetailStudentsTableComponent;
  let fixture: ComponentFixture<CourseDetailStudentsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseDetailStudentsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseDetailStudentsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
