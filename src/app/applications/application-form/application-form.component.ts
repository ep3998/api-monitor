import { Component, OnInit } from '@angular/core';
import { MongodbService } from '../../shared/mongodb.service';

import { IApplication } from '../../../../server/interfaces/IApplication';

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.css']
})
export class ApplicationFormComponent implements OnInit {
  model: IApplication = {
    _id: '',
    name: '',
    environment: null,
    monitors: null
  };

  submitted = false;
  errorMessage;

  constructor(private db: MongodbService) { }

  ngOnInit() {
  }

  onSubmit(appName) {
    const newApp: IApplication = {
      name: appName
    };

    this.db.addApplication(newApp)
        .subscribe(apps => this.submitted = true,
            error => this.errorMessage = <any>error);
  }

  get diagnostic() { return JSON.stringify(this.model); }

}
