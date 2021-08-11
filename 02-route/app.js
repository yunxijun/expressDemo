const express = require('express')

const app = express()


// req:请求对象  res：响应对象
app.get('/', (req, res) => {
    res.send('hello express!')
})

app.post('/', (req, res) => {
    res.send('get a post request!')
})

app.put('/user', (req, res) => {
    res.send('put user!')
})

app.put('/delete', (req, res) => {
    res.send('delete user!')
})

app.listen(3000, () => {
    console.log(`server running at http://localhost:3000/`)
})



