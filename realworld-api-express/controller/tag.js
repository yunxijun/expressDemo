exports.getTags = async (req, res, next) => {
    try {
        // 处理请求
        res.send('GET /tags')
        
    } catch (error) {
        next(error)
    }
}