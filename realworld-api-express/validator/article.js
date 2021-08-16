const { body, param } = require('express-validator')
const validate = require('../middleware/validate')
const mongoose = require('mongoose')
const { Article } = require('../model')


exports.createArticle = validate([     // 配置验证规则
    body('article.title')
        .notEmpty()
        .withMessage('标题不能为空'),
    body('article.description')
        .notEmpty()
        .withMessage('文章摘要不能为空'),
    body('article.body')
        .notEmpty()
        .withMessage('文章内容不能为空')
])

exports.getArticle = validate([
    param('articleId').custom(async value => {
        if (!mongoose.isValidObjectId(value)) {
            return Promise.reject('文章ID类型错误')
        }
    })
])


// 检查文章是否存在
// 修改的文章是否是当前登录用户
exports.updateArticle = [
    validate([
        validate.isValidObjectId(['params'], 'articleId')
    ]),
    async (req, res, next) => {
        const articleId = req.params.articleId
        const article = await Article.findById(articleId)
        req.article = article
        if (!article) {
            return res.status(404).end()
        }
        next()
    },
    async (req, res, next) => {
        // 没有权限
        // console.log(req.user._id.toString(), req.article.author.toString() );
        if (req.user._id.toString() !== req.article.author.toString()) {
            return res.status(403).end()
        }
        next()
    }
]


