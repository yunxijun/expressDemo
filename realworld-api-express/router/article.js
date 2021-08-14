const express = require('express')

const router = express.Router()

// List 
router.get('/', async(req, res, next) => {
    try {
        // 处理请求
        res.send('GET /')
        
    } catch (error) {
        next(error)
    }
})

// Feed 
router.get('/feed', async(req, res, next) => {
    try {
        // 处理请求
        res.send('GET /feed')
        
    } catch (error) {
        next(error)
    }
})

// Get Article
router.get('/:slug', async(req, res, next) => {
    try {
        // 处理请求
        res.send('GET /:slug')
        
    } catch (error) {
        next(error)
    }
})

// create Article
router.post('/', async(req, res, next) => {
    try {
        // 处理请求
        res.send('post /')
        
    } catch (error) {
        next(error)
    }
})

// Update Article
router.put('/:slug', async(req, res, next) => {
    try {
        // 处理请求
        res.send('put /:slug')
        
    } catch (error) {
        next(error)
    }
})


// Delete Article
router.delete('/:slug', async(req, res, next) => {
    try {
        // 处理请求
        res.send('delete /:slug')
        
    } catch (error) {
        next(error)
    }
})

// Add Comments to an Article
router.post('/:slug/comments', async(req, res, next) => {
    try {
        // 处理请求
        res.send('post /:slug/comments')
        
    } catch (error) {
        next(error)
    }
})

// Get Comments from an Article
router.get('/:slug/comments', async(req, res, next) => {
    try {
        // 处理请求
        res.send('get /:slug/comments')
        
    } catch (error) {
        next(error)
    }
})

// delete Comments from an Article
router.delete('/:slug/comments/:id', async(req, res, next) => {
    try {
        // 处理请求
        res.send('delete /:slug/comments/:id')
        
    } catch (error) {
        next(error)
    }
})

// Favorite Article
router.post('/:slug/favorite', async(req, res, next) => {
    try {
        // 处理请求
        res.send('post /:slug/favorite')
        
    } catch (error) {
        next(error)
    }
})

// Unfavorite Article
router.delete('/:slug/favorite', async(req, res, next) => {
    try {
        // 处理请求
        res.send('delete /:slug/favorite')
        
    } catch (error) {
        next(error)
    }
})

module.exports = router