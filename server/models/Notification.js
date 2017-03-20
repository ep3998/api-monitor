/**
 * Created by ep399 on 3/19/2017.
 */
var mongoose = require('mongoose');

var NotificationSchema = new mongoose.Schema({
    toAddress: { type: String },
    fromAddress: { type: String }
});

var Notification = mongoose.model('Notification', NotificationSchema);

module.exports = {
    Notification: Notification
};