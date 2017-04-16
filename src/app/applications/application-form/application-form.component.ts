import { Component, OnInit } from '@angular/core';
import { MongodbService } from '../../shared/mongodb.service';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';

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



  initKeyPair() {
    return this.fb.group({
      name: ['', [Validators.required]],
      value: ['']
    });
  }

  initAuthentication() {
    return this.fb.group({
      oauthTokenURL: [''],
      oauthRefreshURL: [''],
      user: [''],
      password: [''],
      clientId: [''],
      clientSecret: ['']
    });
  }

  initRequestRule() {
    return this.fb.group({
      source: [''],
      property: [''],
      operator: [''],
      value: ['']
    });
  }

  initRequest() {
    return this.fb.group({
      path: ['', [Validators.required]],
      method: ['GET', [Validators.required]],
      isSSL: [false],
      headers: this.fb.array([
        // this.initKeyPair()
      ]),
      parameters: this.fb.array([
        // this.initKeyPair()
      ]),
      body: [''],
      authentication: this.initAuthentication(),
      rules: this.fb.array([
          // this.initRequestRule()
      ])
    });
  }

  initNotification() {
    return this.fb.group({
      name: ['', [Validators.required]],
      toAddress: ['', [Validators.required]],
      fromAddress: ['', [Validators.required]]
    });
  }

  initMonitorRule() {
    return this.fb.group({
      retries: [5, [Validators.required]],
      failureLimit: [1, [Validators.required]],
      notification: this.fb.array([
        // this.initNotification()
      ])
    });
  }

  initMonitor() {
    return this.fb.group({
      name: ['', [Validators.required]],
      delay: [5000, [Validators.required]],
      request: this.initRequest(),
      rules: this.fb.array([
          // this.initMonitorRule()
      ])
    });
  }

  initEnvironment() {
    return this.fb.group({
      name: ['', [Validators.required]],
      baseURL: ['']
    });
  }

  ngOnInit() {
    this.app = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      environments: this.fb.array([
        this.initEnvironment()
      ]),
      monitors: this.fb.array([
      ])
    });
  }

  addEnvironment() {
    const controlEnv = <FormArray>this.app.controls['environments'];
    controlEnv.push(this.initEnvironment());
  }

  removeEnvironment(idx: number) {
    const controlEnv = <FormArray>this.app.controls['environments'];
    controlEnv.removeAt(idx);
  }

  addMonitor() {
    const controlEnv = <FormArray>this.app.controls['monitors'];
    controlEnv.push(this.initMonitor());
  }

  removeMonitor(idx: number) {
    const controlEnv = <FormArray>this.app.controls['monitors'];
    controlEnv.removeAt(idx);
  }

  onSubmit(newApp: IApplication) {

    this.db.addApplication(newApp)
        .subscribe(apps => this.submitted = true,
            error => this.errorMessage = <any>error);
  }

  get diagnostic() { return JSON.stringify(this.app.value); }

}
