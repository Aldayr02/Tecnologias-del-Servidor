const ResponseStatus = require('../utils/response-status');

const roleCheck_middleware = (req, res ,next) => {
    console.log("roleCheck_middleware checking role");
    console.log(req.user);
    const { role } = req.user;

    if(role && role === 'Admin'){
        next();
    } else{
        res.status(ResponseStatus.UNAUTHORIZED).send('Forbidden');
    }
};

module.exports = roleCheck_middleware;