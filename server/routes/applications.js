/**
 * Created by ep399 on 3/19/2017.
 */
var express = require('express');
var router = express.Router();

var Application = require('../models/Application').Application;

/* GET home page. */
router.get('/', function(req, res, next) {
    var filter = {};
    for(var i in req.params){
        filter[i] = req.params(i);
    }

    Application.find(filter, function(err, apps){
        if(err) return next(err);
        res.json(apps);
    });
});

router.post('/', function(req, res, next){
    Application.create(req.body, function(err, app){
        if(err) return next(err);
        res.json(app);
    });
});

router.delete('/', function(req, res, next){
    var filter = {};
    for(var i in req.params){
        filter[i] = req.param(i);
    }

    Application.find(filter).remove(function(err, app){
        if(err) return next(err);
        res.json(app);
    });
});

router.get('/:id', function(req, res, next){
    Application.findById(req.params.id, function(err, app){
        if(err) return next(err);
        res.json(app);
    });
});

router.put('/:id', function(req, res, next){
    Application.findByIdAndUpdate(req.params.id, req.body, function(err, app){
        if(err) return next(err);
        res.json(app);
    });
});

router.delete('/:id', function(req, res, next){
    Application.findByIdAndRemove(req.params.id, req.body, function(err, app){
        if(err) return next(err);
        res.json(app);
    });
});

module.exports = router;
