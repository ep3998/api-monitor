import { Component, OnInit } from '@angular/core';

import { IApplication } from '../../../server/interfaces/IApplication';
import { MongodbService } from '../shared/mongodb.service';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css']
})
export class ApplicationsComponent implements OnInit {
  title;
  errorMessage;
  currApp: IApplication = {
    _id: '',
    name: 'No App Selected',
    environment: null,
    monitors: null
  };
  applications: Array<IApplication>;

  constructor(private db: MongodbService) {
    this.title = 'api-monitor';
  }

  refreshApplications() {
    this.db.getApplications()
        .subscribe(apps => this.applications = apps,
                    error => this.errorMessage = <any>error);
  }

  ngOnInit() {
    this.refreshApplications();
  }

  onAppClick(selApp) {
    this.currApp = selApp;
  }

  addApplication(appName) {
    const newApp: IApplication = {
      name: appName
    };

    // Add to database
    // this.db.addApplication(newApp)
    //     .subscribe(apps => this.applications.push(apps),
    //                 error => this.errorMessage = <any>error);

    this.db.addApplication(newApp)
        .subscribe(apps => this.refreshApplications(),
                    error => this.errorMessage = <any>error);
  }
}
