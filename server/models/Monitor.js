/**
 * Created by ep399 on 3/19/2017.
 */
var mongoose = require('mongoose'),
    Request = require('./Request').Request,
    Notification = require ('./Notification').Notification;

var MonitorSchema = new mongoose.Schema({
    request: Request.schema,
    delay: { type: Number },
    rules: [{
        retries: { type: Number },
        failureLimit: { type: Number },
        notifications: [Notification.schema]
    }]
});

var Monitor = mongoose.model('Monitor', MonitorSchema);

module.exports = {
    Monitor: Monitor
};