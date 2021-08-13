const express = require('express')

const app = express()


// req:请求对象  res：响应对象

// 应用程序级别的中间件

// 不要求任何限定的中间件
// app.use(function (req, res, next) {
//     console.log('time:', Date.now())
// })

// 限定请求路径
// app.use('/user/:id', function (req, res, next) {
//     console.log('request method:', req.method)
//     next()
// })

// 限制： 请求方法 + 请求路径
app.get('/', (req, res) => {
    res.send('hello express!')
}) 

//eg: app.post(), put(),patch(), delete()

// 多个处理函数
// app.get('/user/:id', function (req, res, next) {
//     console.log('request method:', req.method)
//     next()
// }, function (req, res, next) {
//     console.log('request URL:', req.originalUrl)
//     next() 
// })

// 对同一个路径定义多个处理中间件
// app.get('/user/:id', function (req, res, next) {
//     console.log('request ID:', req.params.id)
//     next()
// }, function (req, res, next) {
//     res.send('User info')
//     // next()
// })

// app.get('/user/:id', function (req, res, next) {
//     // console.log('request ID:', req.params.id)
//     // 一个请求的生命周期 只能有一个相应
//     res.end(req.params.id)
// })

// 跳过堆栈的中间件
// app.get('/user/:id', function (req, res, next) {
//     // 从路由器中间件堆栈跳过其余中间件功能
//     if (req.params.id === '0') next('route')
//     else next()
// }, function (req, res, next) {
//     res.send('Regular')
//     // next()
// })

// app.get('/user/:id', function (req, res, next) {
//     // console.log('request ID:', req.params.id)
//     // 一个请求的生命周期 只能有一个相应
//     res.send('Special')
// })

// 中间件也可以在数组中表明为可重用
function logOriginalUrl(req, res, next) {
    console.log('Request Url:', req.originalUrl)
    next()
}

function logMethod(req, res, next) {
    console.log('Request method:', req.method)
    next()
}

var logStuff = [logOriginalUrl, logMethod]

app.get('/user/:id', logStuff, function (req, res, next) {
    res.send('User info')
})


app.listen(3000, () => {
    console.log(`server running at http://localhost:3000/`)
})