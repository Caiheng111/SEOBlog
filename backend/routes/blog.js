const express= require('express')
const router= express.Router()
const {time} =require('../controllers/blogs.js')

router.get('/',time) 


module.exports = router