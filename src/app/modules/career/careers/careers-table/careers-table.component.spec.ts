import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CareersTableComponent } from './careers-table.component';

describe('CareersTableComponent', () => {
  let component: CareersTableComponent;
  let fixture: ComponentFixture<CareersTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CareersTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CareersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
