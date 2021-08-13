const express = require('express')
const router = require('./router')

const app = express()  
// 配置解析表单请求体 (针对不同格式)
app.use(express.json())
app.use(express.urlencoded())




// 挂载路由
// app.use(router)

// 给路由添加访问限制
app.use('/todos', router)

app.listen(3000, () => {
    console.log(`server running at http://localhost:3000/`)
})