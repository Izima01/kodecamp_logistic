function customerOnly (req, res, next) {
    if (req.userDetails.role == 'customer') return next();
    res.status(401).send('You are not a customer');
}

module.exports = customerOnly;