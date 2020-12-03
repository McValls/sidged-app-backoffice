import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CareersCreateDialogComponent } from './careers-create-dialog.component';

describe('CareersCreateDialogComponent', () => {
  let component: CareersCreateDialogComponent;
  let fixture: ComponentFixture<CareersCreateDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CareersCreateDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CareersCreateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
