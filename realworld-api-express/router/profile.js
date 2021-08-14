const express = require('express')

const router = express.Router()

// 获取指定用户资料
router.get('/:username', async(req, res, next) => {
    try {
        // 处理请求
        res.send('get /profiles/:username')
        
    } catch (error) {
        next(error)
    }
})

// 关注用户
router.post('/:username/follow', async(req, res, next) => {
    try {
        // 处理请求
        res.send('post /profiles/:username/follow')
        
    } catch (error) {
        next(error)
    }
})

// 取消关注
router.delete('/:username/follow', async(req, res, next) => {
    try {
        // 处理请求
        res.send('get /profiles/:username/follow')
        
    } catch (error) {
        next(error)
    }
})

module.exports = router