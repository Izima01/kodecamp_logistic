const shippingModel = require('../../models/shippingModel');

async function fetchAllOrders (req, res) {
    const user = req.userDetails;

    if (user.role == 'customer') {
        const orders = await shippingModel.find({ customerId: user.userId });

        if (!orders) return res.status('404').send('No orders available');
        
        return res.status(200).json({ allOrders: orders });
    }

    const orders = await shippingModel.find({ riderId: user.userId });

    if (!orders) return res.status('404').send('No orders available');
    
    return res.status(200).json({ allOrders: orders });
}

module.exports = fetchAllOrders;