/**
 * Created by ep399 on 3/19/2017.
 */
import mongoose = require('mongoose');

import { IResponse } from '../interfaces/IResponse';

const _schema: mongoose.Schema = new mongoose.Schema({
    body: { type: String },
    headers: [{
        name: { type: String },
        value: { type: String }
    }],
    status: { type: Number },
    message: { type: String },
    duration: { type: Number }
});

type ResponseType = IResponse & mongoose.Document;

const _model = mongoose.model<ResponseType>('Application', _schema);

export class Response {
    static model = _model;
    static schema = _model.schema;

    static find(filters): Promise<Array<IResponse>> {
        return new Promise<Array<IResponse>>((resolve, reject) => {
            _model.find(filters, (err, apps) => {
                err ? reject(err) : resolve(apps);
            });
        });
    }

    static create(body): Promise<Array<IResponse>> {
        return new Promise<Array<IResponse>>((resolve, reject) => {
            _model.create(body, (err, app) => {
                err ? reject(err) : resolve(app);
            });
        });
    }

    static remove(filters): Promise<Array<IResponse>> {
        return new Promise<string>((resolve, reject) => {
            console.log('Input filterss - ', filters);
            _model.find(filters).remove((err, res) => {
                err ? reject(err) : resolve(res);
            });
        });
    }
}
