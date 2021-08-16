const express = require('express')
const auth = require('../middleware/auth')
const articalValidator = require('../validator/article')
const articleCtrl = require('../controller/article')

const router = express.Router()

// List 
router.get('/', articleCtrl.getArticleList)

// Feed 
router.get('/feed', articleCtrl.feedArticles)

// Get Article
router.get('/:articleId',articalValidator.getArticle, articleCtrl.getSingleArticle)

// create Article
router.post('/', auth, articalValidator.createArticle, articleCtrl.createArticle)

// Update Article
router.put('/:articleId', articleCtrl.updateArticle)

// Delete Article
router.delete('/:articleId', articleCtrl.deleteArticle)

// Add Comments to an Article
router.post('/:articleId/comments', articleCtrl.addComments)

// Get Comments from an Article
router.get('/:articleId/comments', articleCtrl.getComments)

// delete Comments from an Article
router.delete('/:articleId/comments/:id', articleCtrl.deletecomments)

// Favorite Article
router.post('/:articleId/favorite', articleCtrl.favoriteArticles)

// Unfavorite Article
router.delete('/:articleId/favorite', articleCtrl.unfavoriteArticles)

module.exports = router