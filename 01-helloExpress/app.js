const express = require('express')

const app = express()


// req:请求对象  res：响应对象
app.get('/', (req, res) => {
    res.send('hello express!')
})


app.listen(3000, () => {
    console.log(`server running at http://localhost:3000/`)
})