const express = require('express')

const app = express()


// req:请求对象  res：响应对象
app.get('/', (req, res) => {
    // 设置相应状态码
    // res.statusCode = 201

    // // 结束响应
    // res.end()
    res.write('a')
    res.write('b')

    res.cookie('foo', 'bar')
    // res.send({
    //     foo:'bar'
    // })


    // res.end('\n hello world')
})


app.listen(3000, () => {
    console.log(`server running at http://localhost:3000/`)
})