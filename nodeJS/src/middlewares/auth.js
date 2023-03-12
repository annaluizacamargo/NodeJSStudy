const jwt = require("jsonwebtoken");

function authMiddleware(req, res, next) {
    try {
        const authHeader = req.headers["authorization"];
        const token = authHeader && authHeader.split("")[1];
        if(!token) return res.status(401).json({ message: "Acess denied!"});
        const secret = process.env.SECRET;
        jwt.verify(token, secret);

        next();

    } catch (error) {
        return res.status(400).json({message: "Invalid token!"})
        
    }
}

module.exports = authMiddleware;
