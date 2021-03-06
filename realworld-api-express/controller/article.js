const {Article, User} = require('../model')


// 获取文章列表
exports.getArticleList = async (req, res, next) => {
    try {
        const {
            limit = 20, 
            offset = 0,
            tag,
            author
        } = req.query
        const filter = {}
        if (tag) {
            filter.tagList = tag
        }

        if (author) {
            const user = await User.findOne( {username: author})
            filter.author = user ? user._id : null
        }

        const articles = await Article.find(filter)
            .skip(Number.parseInt(offset))  // 跳过多少条
            .limit(Number.parseInt(limit))
            .sort({
                // -1降序 1 升序
                createdAt:-1
            })  // 取多少条
        const articlesCount = await Article.countDocuments()
        // 处理请求
        res.status(200).json({
            articles,
            articlesCount
        })
        
    } catch (error) {
        next(error)
    }
}

// 获取feed 
exports.feedArticles = async (req, res, next) => {
    try {
        // 处理请求
        res.send('GET /feed')
        
    } catch (error) {
        next(error)
    }
}

// 获取单个文章

exports.getSingleArticle = async (req, res, next) => {
    try {
        // 处理请求
        const article = await Article.findById(req.params.articleId).populate('author')
        // article.populate('author').execPopulate();
        if (!article) {
            return res.status(404).end()
        }
        res.status(200).json({
            article
        })
        
    } catch (error) {
        next(error)
    }
}

// 创建文章
exports.createArticle = async (req, res, next) => {
    try {
        // 处理请求
        const article = new Article(req.body.article)
        console.log(article);
        article.author = req.user._id
        article.populate('author').execPopulate();
        await article.save()
        return res.status(201).json({
            article
        })
        
    } catch (error) {
        console.log('error');
        next(error)
    }
}

// 更新文章
exports.updateArticle = async (req, res, next) => {
    try {
        // 处理请求
        const article = req.article
        const bodyArticle = req.body.article
        article.title = bodyArticle.title || article.title
        article.description = bodyArticle.description || article.description
        article.body = bodyArticle.body || article.body

        await article.save()
        res.status(200).json({
            article
        })
        
    } catch (error) {
        next(error)
    }
}

// 删除文章
exports.deleteArticle = async (req, res, next) => {
    try {
        // 处理请求
        const article = req.article
        await article.remove()
        res.status(204).end()
        
    } catch (error) {
        next(error)
    }
}

// 添加评论
exports.addComments = async (req, res, next) => {
    try {
        // 处理请求
        res.send('post /:slug/comments')
        
    } catch (error) {
        next(error)
    }
}

// 获取评论
exports.getComments = async (req, res, next) => {
    try {
        // 处理请求
        res.send('get /:slug/comments')
        
    } catch (error) {
        next(error)
    }
}

// 删除评论
exports.deletecomments = async (req, res, next) => {
    try {
        // 处理请求
        res.send('delete /:slug/comments/:id')
        
    } catch (error) {
        next(error)
    }
}

// 最爱的
exports.favoriteArticles = async (req, res, next) => {
    try {
        // 处理请求
        res.send('delete /:slug/comments/:id')
        
    } catch (error) {
        next(error)
    }
}

// 不是最爱的
exports.unfavoriteArticles = async (req, res, next) => {
    try {
        // 处理请求
        res.send('delete /:slug/favorite')
        
    } catch (error) {
        next(error)
    }
}
