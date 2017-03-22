import { Component, OnInit } from '@angular/core';

import { IApplication } from '../../../server/interfaces/IApplication';
import { MongodbService } from '../shared/mongodb.service';

class TempApp {
  _id: string;
  name: string;
}

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css']
})
export class ApplicationsComponent implements OnInit {
  title: string;
  currApp: IApplication;
  applications: Array<IApplication>;

  constructor(private db: MongodbService) {
    this.title = 'api-monitor';
    this.currApp = new TempApp;
    this.currApp._id = 'abc';
    this.currApp.name = 'My Application';
    // this.applications = ['My First Application', 'Friends API', 'Rage API'];
    // this.applications = [
    //     new IApplication({_id: 1, name: 'My Application'})
    // ];

    // this.currApp = this.applications[0];
  }

  ngOnInit() {
    this.db.getApplications().subscribe(apps => {
      this.applications = apps;
    });

  }

}
