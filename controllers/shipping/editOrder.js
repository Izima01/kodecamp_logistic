const shippingModel = require('../../models/shippingModel');

async function editOrder (req, res) {
    const user = req.userDetails;

    const order = await shippingModel.findById(req.params.id);

    if (!order) return res.status(404).send('Order not found');

    if (order.status == 'delivered') return res.status(400).send('order delivered already');

    const orderToEdit = await shippingModel.findByIdAndUpdate(req.params.id, {
        status: req.body.newStatus,
        riderId: user.userId
    }, { new: true });

    res.status(200).json({ message: "edit successful", editedOrder: orderToEdit });
}

module.exports = editOrder;