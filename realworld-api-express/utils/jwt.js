const jwt = require('jsonwebtoken')
const { promisify } = require('util')

exports.sign = promisify(jwt.sign)

exports.verify = promisify(jwt.verify)

exports.decode = promisify(jwt.decode)

// 同步生成jwt
// const token = jwt.sign({
//     foo:"bar"
// }, 'yunxijun')
// // 异步生产jwt
// jwt.sign({
//     foo:"bar"
// }, 'yunxijun', (err, token) => {
//     if (err) {
//         return console.log('生产token失败')
//     }
//     console.log(token);
// })


// 同步验证
// const ret = jwt.verify('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIiLCJpYXQiOjE2MjkwMjU4NjV9.jqbCrW7trDH4jw_XCXfYAsMOTcg7Rm6Yd-33wPyyCeo', 
//     'yunxijun')
// console.log(ret);

// // 异步验证
// jwt.verify('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIiLCJpYXQiOjE2MjkwMjU4NjV9.jqbCrW7trDH4jw_XCXfYAsMOTcg7Rm6Yd-33wPyyCeo', 
//     'yunxijun', (err, ret) => {
//         if (err) {
//             return console.log('验证token失败')
//         }
//         console.log(ret);
//     })