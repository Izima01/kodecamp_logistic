function customerOnly (req, res, next) {
    if (req.userDetails.role == 'rider') return next();
    res.status(401).send('You are not a rider');
}

module.exports = customerOnly;