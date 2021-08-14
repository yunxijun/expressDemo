// 获取用户资料
exports.getUserProfile = async (req, res, next) => {
    try {
        // 处理请求
        res.send('get /profiles/:username')
        
    } catch (error) {
        next(error)
    }
}

// 关注用户
exports.followUser = async (req, res, next) => {
    try {
        // 处理请求
        res.send('post /profiles/:username/follow')
        
    } catch (error) {
        next(error)
    }
}

// 取消关注
exports.cancelFollowUser = async (req, res, next) => {
    try {
        // 处理请求
        res.send('get /profiles/:username/follow')
        
    } catch (error) {
        next(error)
    }
}