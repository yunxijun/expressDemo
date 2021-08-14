const express = require('express')
const tagCtrl = require('../controller/tag')

const router = express.Router()

// List Articles
router.get('/', tagCtrl.getTags)

module.exports = router