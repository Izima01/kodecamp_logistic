const jwt = require('jsonwebtoken');

function isUserLoggedIn(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).send('Not authorized');

    const tokenType = authHeader.split(" ")[0];
    const tokenValue = authHeader.split(" ")[1];

    if (tokenType.toLowerCase() == 'bearer') {
        const decoded = jwt.verify(tokenValue, process.env.secret);
        req.userDetails = decoded;
        return next();
    }

    res.status(401).send('Not authorized');
}

module.exports = isUserLoggedIn;