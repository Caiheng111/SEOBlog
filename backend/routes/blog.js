const express= require('express')
const router= express.Router()
const {create} =require('../controllers/blogs.js')

// validators
const { runValidation } = require('../validators');
const { categoryCreateValidator } = require('../validators/category');
const { requireSignin, adminMiddleware } = require('../controllers/auth');

router.get('/', requireSignin, adminMiddleware, create) 


module.exports = router