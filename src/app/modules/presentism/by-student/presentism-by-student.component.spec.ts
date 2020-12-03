import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentismByStudentComponent } from './presentism-by-student.component';

describe('PresentismByStudentComponent', () => {
  let component: PresentismByStudentComponent;
  let fixture: ComponentFixture<PresentismByStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentismByStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentismByStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
