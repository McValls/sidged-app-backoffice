import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentismByCourseComponent } from './presentism-by-course.component';

describe('PresentismByCourseComponent', () => {
  let component: PresentismByCourseComponent;
  let fixture: ComponentFixture<PresentismByCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentismByCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentismByCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
