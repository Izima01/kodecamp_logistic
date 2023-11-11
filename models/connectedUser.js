const { Schema, model } = require('mongoose');

const connectedUsersSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    socketId: {
        type: String,
        required: true
    }
});

module.exports.connectedUsersModel = model('connectedUsers', connectedUsersSchema);