import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CareersEditDialogComponent } from './careers-edit-dialog.component';

describe('CareersEditDialogComponent', () => {
  let component: CareersEditDialogComponent;
  let fixture: ComponentFixture<CareersEditDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CareersEditDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CareersEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
