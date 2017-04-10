import { Component, OnInit } from '@angular/core';
import { MongodbService } from '../../shared/mongodb.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { IApplication } from '../../../../server/interfaces/IApplication';

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.css']
})
export class ApplicationFormComponent implements OnInit {
  app: FormGroup;
  submitted = false;
  errorMessage;

  constructor(private db: MongodbService, private fb: FormBuilder) { }

  ngOnInit() {
    this.app = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]]
    });
  }

  onSubmit(newApp: IApplication) {

    this.db.addApplication(newApp)
        .subscribe(apps => this.submitted = true,
            error => this.errorMessage = <any>error);
  }

  get diagnostic() { return JSON.stringify(this.app.value); }

}
