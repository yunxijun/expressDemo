const express = require('express')

const router = express.Router()

// 用户登录
router.post('/users/login', async(req, res, next) => {
    try {
        // 处理请求
        res.send('post /users/login')
        
    } catch (error) {
        next(error)
    }
})

// 用户注册
router.post('/users', async(req, res, next) => {
    try {
        // 处理请求

        res.send('post /users')
        
    } catch (error) {
        next(error)
    }
})

// 获取当前登录用户
router.get('/user', async(req, res, next) => {
    try {
        // 处理请求

        res.send('get /user')
        
    } catch (error) {
        next(error)
    }
})

// 更新当前登录用户
router.put('/user', async(req, res, next) => {
    try {
        // 处理请求

        res.send('put /user')
        
    } catch (error) {
        next(error)
    }
})

module.exports = router