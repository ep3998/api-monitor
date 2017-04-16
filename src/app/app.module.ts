import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

import { ApplicationsComponent } from './applications/applications.component';
import { MonitorsComponent } from './monitors/monitors.component';
import { MongodbService } from './shared/mongodb.service';
import { ApplicationFormComponent } from './applications/application-form/application-form.component';
import { ApplicationFormEnvComponent } from './applications/application-form/application-form-env/application-form-env.component';
import { ApplicationFormMonitorComponent } from './applications/application-form/application-form-monitor/application-form-monitor.component';

@NgModule({
  declarations: [
    ApplicationsComponent,
    MonitorsComponent,
    ApplicationFormComponent,
    ApplicationFormEnvComponent,
    ApplicationFormMonitorComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    NgbModule.forRoot()
  ],
  providers: [MongodbService],
  bootstrap: [ApplicationsComponent]
})
export class AppModule { }
