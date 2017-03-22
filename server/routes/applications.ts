/**
 * Created by ep399 on 3/19/2017.
 */
import express = require('express');

import { Application } from '../models/Application';

export class ApplicationRouter {
    private router: express.Router = express.Router();
    getRouter(): express.Router {
        /* GET home page. */
        this.router.get('/', (req: express.Request, res: express.Response, next: express.NextFunction) => {
            const filter = {};
            for (const i in req.params) {
                if (req.params.hasOwnProperty(i)) {
                    filter[i] = req.params(i);
                }
            }
            console.log('ApplicationRouter get');
            Application.get(filter).then(apps => {
                return res.json(apps);
            }).catch(err => {
                return next(err);
            });
        });

        this.router.post('/', (req: express.Request, res: express.Response, next: express.NextFunction) => {
            Application.create(req.body).then(app => {
                return res.json(app);
            }).catch(err => {
                return next(err);
            });
        });

        return this.router;
    }
    //
    // router.post('/', function(req, res, next){
    //     Application.create(req.body, function(err, app){
    //         if(err) return next(err);
    //         res.json(app);
    //     });
    // });
    //
    // router.delete('/', function(req, res, next){
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
    // router.get('/:id', function(req, res, next){
    //     Application.findById(req.params.id, function(err, app){
    //         if(err) return next(err);
    //         res.json(app);
    //     });
    // });
    //
    // router.put('/:id', function(req, res, next){
    //     Application.findByIdAndUpdate(req.params.id, req.body, function(err, app){
    //         if(err) return next(err);
    //         res.json(app);
    //     });
    // });
    //
    // router.delete('/:id', function(req, res, next){
    //     Application.findByIdAndRemove(req.params.id, req.body, function(err, app){
    //         if(err) return next(err);
    //         res.json(app);
    //     });
    // });
}
