const express = require('express')

const router = express.Router()

// List Articles
router.get('/tags', async(req, res, next) => {
    try {
        // 处理请求
        res.send('GET /tags')
        
    } catch (error) {
        next(error)
    }
})

module.exports = router