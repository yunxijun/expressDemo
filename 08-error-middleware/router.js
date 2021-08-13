const express = require('express')
const fs = require('fs')
const { getDb, saveDb } = require('./db')

// 1. 创建路由
// 路由示例就相当于一个mini Express示例
const router = express.Router()

// 2. 配置路由
// req:请求对象  res：响应对象
router.get('/', async (req, res, next) => {
    try {
        const db = await getDb()
        return res.status(200).json(db.todos)
    } catch (error) {
        // 如果把任何内容传递给next(),(字符串route除外)，Express都会将当前请求视为错误，
        // 并且跳过所有剩余的无错误处理路由和中间件函数
        next(error)
        // res.status(500).json({
        //     error:error.message
        // })
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        const db = await getDb()
        const todo = db.todos.find(todo => todo.id === Number.parseInt(req.params.id))
        if (!todo) {
           return res.status(404).end()
        }
        return res.status(200).json(todo)
    } catch (error) {
        next(error)
    }
})

router.post('/', async (req, res, next) => {
    try {
        // 1. 获取客户端请求体参数
        // console.log(req.body)
        const todo = req.body
        // 2. 数据验证
        if (!todo.title) {
            return res.status(422).json({
                error:"the title is required!"
            })
        }
        // 3. 数据验证通过，存储db

        const db = await getDb()
        const lastTodo = db.todos[db.todos.length - 1]
        todo.id = lastTodo ? lastTodo.id + 1 : 1
        db.todos.push(todo)
        await saveDb(db)
        res.status(200).json(todo)
    } catch (error) {
        next(error)
    }
})

router.patch('/:id', async (req, res, next) => {
    // 这里有bug 还是要做数据校验的
    try {
        const todo = req.body
        const db = await getDb()
        const ret = db.todos.find(todo => todo.id === Number.parseInt(req.params.id))
        if (!ret) {
            return res.status(404).end()
        }
        // 合并
        // find 返回的是对象地址
        Object.assign(ret, todo)
        await saveDb(db)
        res.status(200).json(ret);
        
    } catch (error) {
        next(error)
    }
})

router.delete('/:id', async (req, res, next) => {
    try {
        const todoId = Number.parseInt(req.params.id)
        const db = await getDb()
        const index = db.todos.findIndex(todo => todo.id === todoId)
        if (index === -1) {
            return res.status(404).end()
        }
        db.todos.splice(index, 1)
        await saveDb(db)
        res.status(204).end()
    } catch (error) {
        next(error)
    }
})


// 3. 导出路由示例
// common js
module.exports = router

// 4. 将路由集成(挂载)到Express实例应用中