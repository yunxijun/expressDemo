// 用户注册
exports.register = async(req, res, next) => {
    try {
        // 处理请求
        res.send('post /users')
        
    } catch (error) {
        next(error)
    }
}

// 用户登录
exports.login = async(req, res, next) => {
    try {
        // 处理请求
        res.send('post /users/login')
        
    } catch (error) {
        next(error)
    }
}

// 获取当前用户
exports.getCurrentUser = async(req, res, next) => {
    try {
        // 处理请求

        res.send('get /user')
        
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