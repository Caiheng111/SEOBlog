const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const mongoose = require('mongoose');
require('dotenv').config
//bring routes
const blogRoutes = require('./routes/blog')
const authRoutes = require('./routes/auth')


//app

const app=express()

//db


mongoose.connect('mongodb+srv://blogAdmin:123456cyh@seoblog-rx7gu.mongodb.net/seoblog?retryWrites=true&w=majority', 
{useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify:false})
.then(()=>console.log('DB connected'))




//middleWear
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cookieParser())


//routes middleWares
app.use('/api', blogRoutes)
app.use('/api', authRoutes)





//cors
if(process.env.NODE_ENV === 'development'){
  app.use(cors({origin:`${process.env.CLIENT_URL}`}))
}


//Port

const port= process.env.PORT || 8000
app.listen(port,()=>{
  console.log(`Server is running on port ${port}`);
  
})