const { verify } = require('../utils/jwt')
const { jwtSecret } = require('../config/config.default')
const { User } = require('../model')

module.exports = async (req, res, next) => {
    // 从请求头获取token 
    let token = req.headers.authentication
    console.log(token)
    token = token ? token.split('Bearer ')[1] : null

    if (!token) {
        return res.status(401).end()
    }
    // 验证
    try {
       const decodedToken = await verify(token, jwtSecret)
       console.log(decodedToken.userId);
       req.user = await User.findById(decodedToken.userId)
    //    console.log(req.user);
       next()
    } catch (error) {
        return res.status(401).end()
    }

}