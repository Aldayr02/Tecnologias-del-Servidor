const ResponseStatus = require('../utils/response-status');

const authUser = {
    id: 666,
    role: 'Admin',
    name: 'Ash'
}

const loginCheck_middleware = (req, res, next) => {
    console.log('loginCheck_middleware checking token');
    const { token } = req.query;

    if(token && token === '12345'){
        req.user = {... authUser};
        next();
    } else{
        res.status(ResponseStatus.UNAUTHORIZED).send('Unauthorized');
    }
}

module.exports = loginCheck_middleware;