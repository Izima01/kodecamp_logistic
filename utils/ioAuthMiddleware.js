const jwt = require('jsonwebtoken');

module.exports = function ioAuthController(token) {
    const [tokenType, tokenValue] = token.split(" ");

    if (tokenType == "Bearer") {
        const verified = jwt.verify(tokenValue, process.env.secret);

        return {
            error: null,
            user: verified
        }
    }

    return {
        error: {
            message: 'Not authorized'
        }, user: null
    }
}