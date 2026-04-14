// Middleware for role and session verification

const jwt = require('jsonwebtoken');
const config = require('../config');

// Middleware for checking the user's role
function verifyRole(role) {
    return (req, res, next) => {
        const userRole = req.user.role; // Assume user role is added to the request
        if (userRole && userRole === role) {
            next();
        } else {
            return res.status(403).json({ message: 'Access denied.' });
        }
    };
}

// Middleware for verifying session
function verifySession(req, res, next) {
    const token = req.header('Authorization') && req.header('Authorization').split(' ')[1];
    if (!token) return res.status(401).json({ message: 'No token, authorization denied.' });

    try {
        const decoded = jwt.verify(token, config.secret);
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(401).json({ message: 'Token is not valid.' });
    }
}

module.exports = { verifyRole, verifySession };