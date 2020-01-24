import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessfulSignUpDialogComponent } from './successful-sign-up-dialog.component';

describe('SuccessfulSignUpDialogComponent', () => {
  let component: SuccessfulSignUpDialogComponent;
  let fixture: ComponentFixture<SuccessfulSignUpDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessfulSignUpDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessfulSignUpDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
