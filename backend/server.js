const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()
//bring routes
const blogRoutes = require('./routes/blog')
const authRoutes = require('./routes/auth')
const userRoutes = require('./routes/user')


//app

const app=express()

//db


mongoose.connect(process.env.DATABASE_CLOUD, 
{useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify:false})
.then(()=>console.log('DB connected'))
.catch(err=>{
  console.log(err);
})


//middleWear
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cookieParser())

// cors
if (process.env.NODE_ENV === 'development') {
  app.use(cors({ origin: `${process.env.CLIENT_URL}` }));
}

//routes middleWares
app.use('/api', blogRoutes)
app.use('/api', authRoutes)
app.use('/api', userRoutes)


//Port

const port= process.env.PORT || 8000
app.listen(port,()=>{
  console.log(`Server is running on port ${port}`);

})