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
router.get('/:slug', articleCtrl.getSingleArticle)

// create Article
router.post('/', auth, articalValidator.createArticle, articleCtrl.createArticle)

// Update Article
router.put('/:slug', articleCtrl.updateArticle)

// Delete Article
router.delete('/:slug', articleCtrl.deleteArticle)

// Add Comments to an Article
router.post('/:slug/comments', articleCtrl.addComments)

// Get Comments from an Article
router.get('/:slug/comments', articleCtrl.getComments)

// delete Comments from an Article
router.delete('/:slug/comments/:id', articleCtrl.deletecomments)

// Favorite Article
router.post('/:slug/favorite', articleCtrl.favoriteArticles)

// Unfavorite Article
router.delete('/:slug/favorite', articleCtrl.unfavoriteArticles)

module.exports = router