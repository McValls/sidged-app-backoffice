import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentismComponent } from './presentism.component';

describe('PresentismComponent', () => {
  let component: PresentismComponent;
  let fixture: ComponentFixture<PresentismComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentismComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
