import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectsCreateDialogComponent } from './subjects-create-dialog.component';

describe('SubjectsCreateDialogComponent', () => {
  let component: SubjectsCreateDialogComponent;
  let fixture: ComponentFixture<SubjectsCreateDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectsCreateDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectsCreateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
