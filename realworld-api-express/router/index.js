const express = require('express')

const router = express.Router()

// 用户相关路由模块

router.use(require('./user'))

// 用户资料相关路由

router.use('/profiles', require('./profile'))

// 文章相关路由模块

router.use('/articles', require('./article'))

// tag

router.use(require('./tag'))

module.exports = router