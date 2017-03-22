/**
 * Created by ep399 on 3/19/2017.
 */
var mongoose = require('mongoose');

var RequestRuleSchema = new mongoose.Schema({
    source: {type: String},
    property: {type: String},
    operator: {type: String},
    value: {type: String}
});

var RequestRule = mongoose.model('RequestRule', RequestRuleSchema);

module.exports = {
    RequestRule: RequestRule
};