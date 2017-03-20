var mongoose = require('mongoose');
var RequestAssertion = require('./RequestAssertion').RequestAssertion;

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
    assertions: [RequestAssertion.schema]
});

var Request = mongoose.model('Request', RequestSchema);

module.exports = {
    Request: Request
};