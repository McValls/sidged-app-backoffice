import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectsEditDialogComponent } from './subjects-edit-dialog.component';

describe('SubjectsEditDialogComponent', () => {
  let component: SubjectsEditDialogComponent;
  let fixture: ComponentFixture<SubjectsEditDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectsEditDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectsEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
