const { verify } = require('../utils/jwt')
const { jwtSecret } = require('../config/config.default')
const { User } = require('../model')

module.exports = async (req, res, next) => {
    // 从请求头获取token 
    let token = req.headers.authentication
    token = token ? token.split('Bearer ')[1] : null
    console.log(token)

    if (!token) {
        return res.status(401).end()
    }
    // 验证
    try {
        console.log(token);
        const decodedToken = await verify(token, jwtSecret)
        console.log(decodedToken);
        req.user = await User.findById(decodedToken.userId)
        console.log(req.user);
        console.log('auth 认证通过');
        next()
    } catch (error) {
        console.log('auth 认证不通过');
        console.log('error in auth.js');
        return res.status(401).end()
    }

}