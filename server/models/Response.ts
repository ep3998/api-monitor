/**
 * Created by ep399 on 3/19/2017.
 */
var mongoose = require('mongoose');

var ResponseSchema = new mongoose.Schema({
    body: { type: String },
    headers: [{
        name: { type: String },
        value: { type: String }
    }],
    status: { type: Number },
    message: { type: String },
    duration: { type: Number }
});

var Response = mongoose.model('Response', ResponseSchema);

module.exports = {
    Response: Response
};