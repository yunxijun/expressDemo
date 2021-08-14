// 用户注册
exports.register = async(req, res, next) => {
    try {
        // 1. 拿到请求体数据
        console.log(req.body)
        // 2. 验证数据
            // 2.1 基本数据验证
            // 2.2 业务数据验证
        
        // 3. 验证通过保存数据库
        
        // 4. 发送响应
        res.send('post register')
        
    } catch (error) {
        next(error)
    }
}

// 用户登录
exports.login = async(req, res, next) => {
    try {
        JSON.parse('dsatats')
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