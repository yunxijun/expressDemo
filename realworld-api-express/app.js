const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const app = express()

// 配置中间件
app.use(morgan('dev'))

app.use(express.json())

app.use(cors())

const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send('Hello world')
})

app.post('/', (req, res) => {
    console.log(req.body)
    res.send('Hello world')
})

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
})