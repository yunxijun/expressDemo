const express = require('express')
const morgan = require('morgan')

const app = express()

// app.use(morgan('tiny'))

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))


// req:请求对象  res：响应对象
app.get('/', (req, res) => {
    res.send('hello express!')
})



app.listen(3000, () => {
    console.log(`server running at http://localhost:3000/`)
})