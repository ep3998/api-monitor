import mongoose = require('mongoose');
import { RequestRule } from './RequestRule';

import { IRequest } from '../interfaces/IRequest';

const _schema: mongoose.Schema = new mongoose.Schema({
    path: String,
    method: String,
    isSSL: Boolean,
    headers: [{
        name: { type: String },
        value: { type: String }
    }],
    parameters: [{
        name: { type: String },
        value: { type: String }
    }],
    body: String,
    authentication: {
        oauthTokenURL: { type: String },
        oauthRefreshURL: { type: String },
        user: { type: String },
        password: { type: String },
        clientId: { type: String },
        clientSecret: { type: String }
    },
    rules: [RequestRule.schema]
});

type RequestType = IRequest & mongoose.Document;

const _model = mongoose.model<RequestType>('Request', _schema);

export class Request {
    static model = _model;
    static schema = _model.schema;

    static find(filters): Promise<Array<IRequest>> {
        return new Promise<Array<IRequest>>((resolve, reject) => {
            _model.find(filters, (err, apps) => {
                err ? reject(err) : resolve(apps);
            });
        });
    }

    static create(body): Promise<Array<IRequest>> {
        return new Promise<Array<IRequest>>((resolve, reject) => {
            _model.create(body, (err, app) => {
                err ? reject(err) : resolve(app);
            });
        });
    }

    static remove(filters): Promise<Array<IRequest>> {
        return new Promise<string>((resolve, reject) => {
            console.log('Input filterss - ', filters);
            _model.find(filters).remove((err, res) => {
                err ? reject(err) : resolve(res);
            });
        });
    }
}
