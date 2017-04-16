import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-application-form-env',
  templateUrl: './application-form-env.component.html',
  styleUrls: ['../application-form.component.css', './application-form-env.component.css']
})
export class ApplicationFormEnvComponent implements OnInit {

  @Input('group')
  public environmentForm: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
