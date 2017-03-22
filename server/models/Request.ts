var mongoose = require('mongoose');
var RequestRule = require('./RequestRule').RequestRule;

var RequestSchema = new mongoose.Schema({
    path: String,
    method: String,
    isSSL: Boolean,
    headers: [{
        name: { type: String },
        value: { type: String }
    }],
    parameters: [{
        name: { type: String },
        value: { type: String }
    }],
    body: String,
    authentication: {
        oauthTokenURL: { type: String },
        oauthRefreshURL: { type: String },
        user: { type: String },
        password: { type: String },
        clientId: { type: String },
        clientSecret: { type: String }
    },
    rules: [RequestRule.schema]
});

var Request = mongoose.model('Request', RequestSchema);

module.exports = {
    Request: Request
};