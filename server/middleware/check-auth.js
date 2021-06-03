const jwt = require('jsonwebtoken');
require('../config/config');


function jwtAuth(req, res, next) {
    try {
        const token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, process.env.JWT_SECRET)
        next();
    } catch (err) {

        console.log("Err in auth Check");
        return res.status(400).send({ auth: false, message: "No token Provided" });
    }
}
module.exports = jwtAuth;