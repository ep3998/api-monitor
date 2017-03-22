/**
 * Created by ep399 on 3/19/2017.
 */
var mongoose = require('mongoose');

var EnvironmentSchema = new mongoose.Schema({
    name: { type: String, index: true },
    baseURL: { type: String }
});

var Environment = mongoose.model('Environment', EnvironmentSchema);

module.exports = {
    Environment: Environment
};