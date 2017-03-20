/**
 * Created by ep399 on 3/19/2017.
 */
var mongoose = require('mongoose'),
    Environment = require('./Environment').Environment,
    Monitor = require('./Monitor').Monitor;

var ApplicationSchema = new mongoose.Schema({
    name: { type: String, index: true },
    environments: [Environment.schema],
    monitors: [Monitor.schema]
});

var Application = mongoose.model('Application', ApplicationSchema);

module.exports = {
    Application: Application
};