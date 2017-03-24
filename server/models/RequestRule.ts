/**
 * Created by ep399 on 3/19/2017.
 */

import mongoose = require('mongoose');

import { IRequestRule } from '../interfaces/IRequestRule';

const _schema: mongoose.Schema = new mongoose.Schema({
    source: {type: String},
    property: {type: String},
    operator: {type: String},
    value: {type: String}
});

type RequestRuleType = IRequestRule & mongoose.Document;

const _model = mongoose.model<RequestRuleType>('RequestRule', _schema);

export class RequestRule {
    static model = _model;
    static schema = _model.schema;

    static find(filters): Promise<Array<IRequestRule>> {
        return new Promise<Array<IRequestRule>>((resolve, reject) => {
            _model.find(filters, (err, apps) => {
                err ? reject(err) : resolve(apps);
            });
        });
    }

    static create(body): Promise<Array<IRequestRule>> {
        return new Promise<Array<IRequestRule>>((resolve, reject) => {
            _model.create(body, (err, app) => {
                err ? reject(err) : resolve(app);
            });
        });
    }
}
