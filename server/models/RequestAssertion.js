/**
 * Created by ep399 on 3/19/2017.
 */
var mongoose = require('mongoose');

var RequestAssertionSchema = new mongoose.Schema({
    source: {type: String},
    property: {type: String},
    operator: {type: String},
    value: {type: String}
});

var RequestAssertion = mongoose.model('RequestAssertion', RequestAssertionSchema);

module.exports = {
    RequestAssertion: RequestAssertion
};