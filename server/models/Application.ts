/**
 * Created by ep399 on 3/19/2017.
 */
import mongoose = require('mongoose');
import { Environment } from './Environment';
import { Monitor } from './Monitor';

import { IApplication } from '../interfaces/IApplication';

const _schema: mongoose.Schema = new mongoose.Schema({
    name: { type: String, index: true },
    environments: [Environment.schema],
    monitors: [Monitor.schema]
});

type ApplicationType = IApplication & mongoose.Document;

const _model = mongoose.model<ApplicationType>('Application', _schema);

export class Application {
    static model = _model;
    static schema = _model.schema;

    static find(filters): Promise<Array<IApplication>> {
        return new Promise<Array<IApplication>> ((resolve, reject) => {
           _model.find(filters, (err, apps) => {
               err ? reject(err) : resolve(apps);
           });
        });
    }

    static create(body): Promise<Array<IApplication>> {
        return new Promise<Array<IApplication>> ((resolve, reject) => {
            _model.create(body, (err, app) => {
                err ? reject(err) : resolve(app);
            });
        });
    }

    static remove(filters): Promise<Array<IApplication>> {
        return new Promise<string> ((resolve, reject) => {
            console.log('Input filterss - ', filters);
            // _model.remove(filters, (err, res) => {
            //     err ? reject(err) : resolve(res);
            // });
            _model.find(filters).remove((err, res) => {
                err ? reject(err) : resolve(res);
            });
        });
    }
    //
    //     router.delete('/', function(req, res, next){
    //     var filter = {};
    //     for(var i in req.params){
    //         filter[i] = req.param(i);
    //     }
    //
    //     Application.find(filter).remove(function(err, app){
    //         if(err) return next(err);
    //         res.json(app);
    //     });
    // });
    //
    //     router.get('/:id', function(req, res, next){
    //     Application.findById(req.params.id, function(err, app){
    //         if(err) return next(err);
    //         res.json(app);
    //     });
    // });
    //
    //     router.put('/:id', function(req, res, next){
    //     Application.findByIdAndUpdate(req.params.id, req.body, function(err, app){
    //         if(err) return next(err);
    //         res.json(app);
    //     });
    // });
    //
    //     router.delete('/:id', function(req, res, next){
    //     Application.findByIdAndRemove(req.params.id, req.body, function(err, app){
    //         if(err) return next(err);
    //         res.json(app);
    //     });
    // });
}
