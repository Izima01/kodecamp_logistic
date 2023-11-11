const { Schema, model } = require('mongoose');

const orderSchema = new Schema({
    itemName: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true,
    },
    destinationAddress: {
        type: String,
        required: true,
    },
    itemWeight: {
        type: Number,
        required: true,
    },
    customerId: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: true,
    },
    riderId: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    cost: {
        type: Number,
        default: 1000
    },
    status: {
        type: String,
        enum: ['pending', 'in-transit', 'delivered'],
        defalt: 'pending'
    }
}, { timestamps: true });

const userModel = model('orders', orderSchema);

module.exports = userModel;