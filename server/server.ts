import assert = require('assert');
import errorHandler = require('errorhandler');
import mongoose = require('mongoose');

import express = require('express');
import path = require('path');
import logger = require('morgan');
import bodyParser = require('body-parser');

import { ApplicationRouter } from './routes/applications';

export class Server {
    public app: express.Application;

    public static bootstrap(): Server {
        return new Server();
    }

    constructor() {
        this.app = express();

        this.config();

        this.routes();

        this.api();
    }

    public api() {

    }

    public config() {
        // Connection URL
        const url = 'mongodb://localhost:27017/api-monitor';
        mongoose.connect(url, function(err){
            if (err) {
                console.log('MongoDB connection error:', err);
            } else {
                console.log('MongoDB connection successful:', url);
            }
        });


        // view engine setup
        // app.set('views', path.join(__dirname, 'views'));
        // app.set('view engine', 'pug');

        // Logging
        this.app.use(logger('dev'));

        // Body handling for POST data
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));

        // Headers for Cross-Origins
        // app.use(function(req, res, next){
        //
        //     res.setHeader('Access-Control-Allow-Origin', '*');
        //     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        //     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');
        //
        //     next();
        // });

        // Static Angular /dist route
        this.app.use(express.static(path.join(__dirname, '../dist')));

        this.app.use('/api/applications', new ApplicationRouter().getRouter());

        // Catch-all - other routes go to index
        this.app.get('*', (req, res) => {
            res.sendFile(path.join(__dirname, '../dist/index.html'));
        });

        // catch 404 and forward to error handler
        this.app.use(function(err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
            err.status = 404;
            next(err);
        });

        // error handler
        this.app.use(errorHandler());
    }

    private routes() {
        let router: express.Router;
        router = express.Router();

        this.app.use(router);
    }
}

