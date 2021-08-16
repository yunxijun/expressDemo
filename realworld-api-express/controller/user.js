const { User } = require('../model')
const jwt = require('../utils/jwt')
const { jwtSecret } = require('../config/config.default')

// 用户注册
exports.register = async(req, res, next) => {
    try {
        // 1. 拿到请求体数据
        console.log(req.body)
        // 2. 验证数据
            // 2.1 基本数据验证
            // 2.2 业务数据验证
        
        // 3. 验证通过保存数据库
        const user = new User(req.body.user)
        await user.save()
        // user = user.toJSON()
        // delete user.paassword
        // 4. 发送响应
        res.status(201).json({
            user
        })
        
    } catch (error) {
        next(error)
    }
}

// 用户登录
exports.login = async(req, res, next) => {
    try {
        // 1. 数据验证2
        // 2. 生成token
        const user = req.user.toJSON()
        const token = await jwt.sign({
            userId:user._id
        }, jwtSecret, {
            expiresIn: 60 * 60
        })
        // 处理请求
        delete user.password
        res.status(200).json({
            ... user,
            token
        })
        
    } catch (error) {
        next(error)
    }
}

// 获取当前用户
exports.getCurrentUser = async(req, res, next) => {
    try {
        // 处理请求
        // console.log(req.headers);
        res.status(200).json({
            user:req.user
        })
        
    } catch (error) {
        next(error)
    }
}

// 更新当前用户
exports.updateCurrentUser = async(req, res, next) => {
    try {
        // 处理请求

        res.send('put /user')
        
    } catch (error) {
        next(error)
    }
}