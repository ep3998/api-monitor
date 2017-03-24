import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { IApplication } from '../../../server/interfaces/IApplication';

@Injectable()
export class MongodbService {

  private apiPath = 'api/applications';

  constructor(private http: Http) {}

  getApplications(): Observable<Array<IApplication>> {
    return this.http.get(this.apiPath)
        .map(this.extractData)
        .catch(this.handleError);
  }

  addApplication(app): Observable<IApplication> {
    console.log('Post application');
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return this.http.post(this.apiPath, app, options)
        .map(this.extractData)
        .catch(this.handleError);
  }

  private extractData(res: Response) {
    const body = res.json();
    return body || {};
  }

  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}

