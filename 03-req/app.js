const express = require('express')

const app = express()


// req:请求对象  res：响应对象

// req 继承自 http.IncomingMessage
// res 继承自 http.ServerResponse
app.get('/', (req, res) => {
    console.log(req.url)
    console.log(req.method)
    console.log(req.headers)
    console.log(req.query)
    res.send('hello express!')
})


app.listen(3000, () => {
    console.log(`server running at http://localhost:3000/`)
})