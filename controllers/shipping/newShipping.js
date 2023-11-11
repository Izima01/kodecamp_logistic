const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const shippingModel = require('../../models/shippingModel');
// const secret = process.env.secret;

async function createNewRequest (req, res) {
    const { itemName, address, destinationAddress, itemWeight, cost } = req.body;
    console.log(req.userDetails);

    const newOrder = await shippingModel.create({
        itemName, address, destinationAddress, itemWeight, cost, customerId: req.userDetails.userId, riderId: null, status: 'pending'
    });

    res.status(201).json({ message: "Created Successfully", newOrder });
}

module.exports = createNewRequest;