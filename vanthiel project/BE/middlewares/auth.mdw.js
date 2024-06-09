const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    const authorizationClient = req.headers['authorization'];
    const token = authorizationClient && authorizationClient.split(' ')[1]

    if (!token) return res.status(401).json({ message: 'Unauthorized' })

    try {
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
        next();
    } catch (e) {
        return res.sendStatus(403)
    }
}