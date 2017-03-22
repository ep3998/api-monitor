/**
 * Created by ep399 on 3/19/2017.
 */
import mongoose = require('mongoose');
// import Environment = require('./Environment').Environment;
// import Monitor = require('./Monitor').Monitor;

import { IApplication } from '../interfaces/IApplication';

const _schema: mongoose.Schema = new mongoose.Schema({
    name: { type: String, index: true },
    // environments: [Environment.schema],
    // monitors: [Monitor.schema]
});

type ApplicationType = IApplication & mongoose.Document;

const _model = mongoose.model<ApplicationType>('Application', _schema);

export class Application {
    static get(filters): Promise<Array<IApplication>> {
        console.log('In Application');
        return new Promise<Array<IApplication>> ((resolve, reject) => {
           _model.find((err, apps) => {
               err ? reject(err) : resolve(apps);
           });
        });
    }

    static create(body): Promise<Array<IApplication>> {
        console.log('In Application');
        return new Promise<Array<IApplication>> ((resolve, reject) => {
            _model.create(body, (err, app) => {
                err ? reject(err) : resolve(app);
            });
        });
    }
    // router.get('/', function(req, res, next) {
    //     const filter = {};
    //     for(var i in req.params){
    //         filter[i] = req.params(i);
    //     }
    //
    //     Application.find(filter, function(err, apps){
    //         if(err) return next(err);
    //         res.json(apps);
    //     });
    // });
    //     router.post('/', function(req, res, next){
    //     Application.create(req.body, function(err, app){
    //         if(err) return next(err);
    //         res.json(app);
    //     });
    // });
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
