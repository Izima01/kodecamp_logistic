const { Schema, model } = require('mongoose');

const notificationSchema = new Schema({
    sendTo: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    order: {
        type: Schema.Types.ObjectId,
        ref: 'orders',
        required: true
    },
    message: {
        type: String,
        required: true
    }
});

module.exports.notificationModel = model('notification', notificationSchema);