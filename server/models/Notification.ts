/**
 * Created by ep399 on 3/19/2017.
 */
import mongoose = require('mongoose');

import { INotification } from '../interfaces/INotification';

const _schema = new mongoose.Schema({
    name: { type: String },
    toAddress: { type: String },
    fromAddress: { type: String }
});

type NotificationType = INotification & mongoose.Document;

const _model = mongoose.model<NotificationType>('Notification', _schema);

export class Notification {
    static model = _model;
    static schema = _model.schema;

    static find(filters): Promise<Array<NotificationType>> {
        return new Promise<Array<NotificationType>>((resolve, reject) => {
            _model.find(filters, (err, apps) => {
                err ? reject(err) : resolve(apps);
            });
        });
    }

    static create(body): Promise<Array<NotificationType>> {
        return new Promise<Array<NotificationType>>((resolve, reject) => {
            _model.create(body, (err, app) => {
                err ? reject(err) : resolve(app);
            });
        });
    }
}
