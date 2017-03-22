import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MongodbService {

  constructor(private http: Http) { }

  getApplications() {
    return this.http.get('/api/applications')
        .map(res => res.json());
  }
}
