const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const mongoose = require('mongoose');
require('dotenv').config


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

//cors
if(process.env.NODE_ENV === 'development'){
  app.use(cors({origin:`${process.env.CLIENT_URL}`}))
}

//routes

app.get('/api',(req,res)=>{
  res.json({time: Date().toString()})
})


//Port

const port= process.env.PORT || 8000
app.listen(port,()=>{
  console.log(`Server is running on port ${port}`);
  
})