import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationFormEnvComponent } from './application-form-env.component';

describe('ApplicationFormEnvComponent', () => {
  let component: ApplicationFormEnvComponent;
  let fixture: ComponentFixture<ApplicationFormEnvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationFormEnvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationFormEnvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
