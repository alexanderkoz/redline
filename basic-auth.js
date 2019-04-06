async function basicAuth(req, res, next) {
    
    // make authenticate path public
    if (req.path === '/users/authenticate') {
        return next();
    }

    /*
    if (req.path ===  'https://yuuvis.io/api')
    {
        return next();
    }
    */

    // check for basic auth header
    if (!req.headers.authorization || req.headers.authorization.indexOf('Basic ') === -1) {
        return res.status(401).json({ message: 'Missing Authorization Header' });
    }

    // verify auth credentials
    const base64Credentials =  req.headers.authorization.split(' ')[1];
    const credentials = Buffer.from(base64Credentials, 'base64').toString('utf-8');
    const [username, password] = credentials.split(':');
    const user = await userService.authenticate({ username, password });
    if (!user) {
        return res.status(401).json({ message: 'Invalid Authentication Credentials' });
    }

    req.user = user

    next();
}

module.exports = basicAuth