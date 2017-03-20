/**
 * Created by ep399 on 3/19/2017.
 */
var mongoose = require('mongoose'),
    Application = require('./Application').Application,
    Request = require('./Request').Request,
    Environment = require('./Environment').Environment,
    RequestAssertion = require('./RequestAssertion').RequestAssertion,
    Response = require('./Response').Response;

var LogSchema = new mongoose.Schema({
    application: Application.schema,
    request: Request.schema,
    environment: Environment.schema,
    isSuccess: { type: Boolean },
    startDate: { type: Number },
    endDate: { type: Number },
    errors: {
        assertion: RequestAssertion.schema,
        value: { type: String }
    },
    response: Response.schema
});

var Log = mongoose.model('Log', LogSchema);

module.exports = {
    Log: Log
};