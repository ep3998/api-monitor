/**
 * Created by ep399 on 3/19/2017.
 */
import mongoose = require('mongoose');

import { IEnvironment } from '../interfaces/IEnvironment';

const _schema = new mongoose.Schema({
    name: { type: String, index: true },
    baseURL: { type: String }
});

type EnvironmentType = IEnvironment & mongoose.Document;

const _model = mongoose.model<EnvironmentType>('Environment', _schema);

export class Environment {
    static model = _model;
    static schema = _model.schema;

    static get(filters): Promise<Array<IEnvironment>> {
        return new Promise<Array<IEnvironment>> ((resolve, reject) => {
            _model.find((err, apps) => {
                err ? reject(err) : resolve(apps);
            });
        });
    }

    static create(body): Promise<Array<IEnvironment>> {
        return new Promise<Array<IEnvironment>> ((resolve, reject) => {
            _model.create(body, (err, app) => {
                err ? reject(err) : resolve(app);
            });
        });
    }
}
