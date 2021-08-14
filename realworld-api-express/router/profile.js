const express = require('express')
const profileCtrl = require('../controller/profile')

const router = express.Router()

// 获取指定用户资料
router.get('/:username', profileCtrl.getUserProfile)

// 关注用户
router.post('/:username/follow', profileCtrl.followUser)

// 取消关注
router.delete('/:username/follow', profileCtrl.cancelFollowUser)

module.exports = router