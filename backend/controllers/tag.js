const Tag = require('../models/tag')
const slugify = require('slugify')
const {errorHandler} = require('../helper/dbErrorHandler')

//create a tag
exports.create = (req, res)=>{
  const {name}=req.body
  let slug = slugify(name).toLowerCase()
  let tag = new Tag({name, slug})

  tag.save((err,data)=>{
    if(err){
      return res.status(400).json({
        error: errorHandler(err)
      })
    }
    res.json(data)
  })
}

//get all tags
exports.list = (req, res) => {
  Tag.find({}).exec((err, data) => {
      if (err) {
          return res.status(400).json({
              error: errorHandler(err)
          });
      }
      res.json(data);
  });
};


// get a category
exports.read =() =>{
  const slug = req.params.slug.toLowerCase()

  Tag.findOne({ slug }).exec((err, tag) => {
    if (err) {
        return res.status(400).json({
            error: errorHandler(err)
        });
    }
    res.json(tag)
  })
}

// remove category
exports.remove = (req, res) => {
  const slug = req.params.slug.toLowerCase();

  Tag.findOneAndRemove({ slug }).exec((err, data) => {
      if (err) {
          return res.status(400).json({
              error: errorHandler(err)
          });
      }
      res.json({
          message: 'Tag deleted successfully'
      });
  });
};