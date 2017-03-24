/**
 * Created by ep399 on 3/19/2017.
 */

import mongoose = require('mongoose');
import { Request } from './Request';
import { Notification } from './Notification';

import { IMonitor } from '../interfaces/IMonitor';

const _schema = new mongoose.Schema({
    name: { type: String },
    request: Request.schema,
    delay: { type: Number },
    rules: [{
        retries: { type: Number },
        failureLimit: { type: Number },
        notifications: [Notification.schema]
    }]
});

type MonitorType = IMonitor & mongoose.Document;

const _model = mongoose.model<MonitorType>('Monitor', _schema);

export class Monitor {
    static model = _model;
    static schema = _model.schema;

    static find(filters): Promise<Array<MonitorType>> {
        return new Promise<Array<MonitorType>>((resolve, reject) => {
            _model.find(filters, (err, apps) => {
                err ? reject(err) : resolve(apps);
            });
        });
    }

    static create(body): Promise<Array<MonitorType>> {
        return new Promise<Array<MonitorType>>((resolve, reject) => {
            _model.create(body, (err, app) => {
                err ? reject(err) : resolve(app);
            });
        });
    }
}
