/**
 * Created by ep399 on 3/19/2017.
 */
import mongoose = require('mongoose');
import { Application } from './Application';
import { Request } from './Request';
import { Environment } from './Environment';
import { RequestRule } from './RequestRule';
import { Response } from './Response';

import { ILog } from '../interfaces/ILog';

const _schema: mongoose.Schema = new mongoose.Schema({
    application: Application.schema,
    request: Request.schema,
    environment: Environment.schema,
    isSuccess: { type: Boolean },
    startDate: { type: Number },
    endDate: { type: Number },
    errors: [{
        rule: RequestRule.schema,
        value: { type: String }
    }],
    response: Response.schema
});

type LogType = ILog & mongoose.Document;

const _model = mongoose.model<LogType>('Log', _schema);

export class Log {
    static model = _model;
    static schema = _model.schema;

    static find(filters): Promise<Array<ILog>> {
        return new Promise<Array<ILog>>((resolve, reject) => {
            _model.find(filters, (err, apps) => {
                err ? reject(err) : resolve(apps);
            });
        });
    }

    static create(body): Promise<Array<ILog>> {
        return new Promise<Array<ILog>>((resolve, reject) => {
            _model.create(body, (err, app) => {
                err ? reject(err) : resolve(app);
            });
        });
    }

    static remove(filters): Promise<Array<ILog>> {
        return new Promise<string>((resolve, reject) => {
            console.log('Input filterss - ', filters);
            // _model.remove(filters, (err, res) => {
            //     err ? reject(err) : resolve(res);
            // });
            _model.find(filters).remove((err, res) => {
                err ? reject(err) : resolve(res);
            });
        });
    }
}
