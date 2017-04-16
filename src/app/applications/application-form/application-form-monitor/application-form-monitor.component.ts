import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

enum RequestMethod {
  GET = 1,
  POST = 2,
  PUT = 3,
  PATCH = 4,
  DELETE = 5,
  COPY = 6,
  HEAD = 7,
  OPTIONS = 8
  // LINK = 9,
  // UNLINK = 10,
  // PURGE = 11,
  // LOCK = 12,
  // UNLOCK = 13,
  // PROPFIND = 14,
  // VIEW = 15
}

@Component({
  selector: 'app-application-form-monitor',
  templateUrl: './application-form-monitor.component.html',
  styleUrls: ['../application-form.component.css', './application-form-monitor.component.css']
})
export class ApplicationFormMonitorComponent implements OnInit {

  @Input('group')
  public monitorForm: FormGroup;

  methodOptions: string[];
  RequestMethod: typeof RequestMethod = RequestMethod;

  constructor() { }

  ngOnInit() {
    const options = Object.keys(RequestMethod);
    this.methodOptions = options.slice(options.length / 2);
  }

}
