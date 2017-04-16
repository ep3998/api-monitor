import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationFormMonitorComponent } from './application-form-monitor.component';

describe('ApplicationFormMonitorComponent', () => {
  let component: ApplicationFormMonitorComponent;
  let fixture: ComponentFixture<ApplicationFormMonitorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationFormMonitorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationFormMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
