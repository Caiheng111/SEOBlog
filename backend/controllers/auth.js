
const User= require('../models/user')
const shortid = require('shortid')


exports.signup=(req,res)=>{
  
    User.findOne({email:req.body.email}).exec((err, user)=>{
      if(user){
        return res.status(400).json({
          error: ' Email is token'
        })
      }

      const {name, email,password}= req.body
      let username = shortid.generate()
      let profile = `${process.env.CLIENT_URL}/profile/${username}`

      let newUser = new User({name, email, password, profile, username})

      newUser.save((err,success)=>{
        if(err){
          return res.status(400).json({
            error:err
          })
        }
        res.json({
          message : 'SignUp success! Plese Signin'
        })
      })

    })

}