const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

// const router = require('./router/index')
const router = require('./router')
const errorHandle = require('./middleware/error-handler')

const app = express()

// 配置中间件
app.use(morgan('dev'))

app.use(express.json())

app.use(cors())


const PORT = process.env.PORT || 3000

// 挂载路由
app.use('/api', router)


// 挂载同意处理服务端错误中间件

app.use(errorHandle())

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
})