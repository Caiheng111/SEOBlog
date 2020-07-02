const Category = require('../models/category')
const slugify = require('slugify')
const {errorHandler} = require('../helper/dbErrorHandler')
const category = require('../models/category')


//create a category
exports.create = (req, res)=>{
  const {name}=req.body
  let slug = slugify(name).toLowerCase()
  let category = new Category({name, slug})

  category.save((err,data)=>{
    if(err){
      return res.status(400).json({
        error: errorHandler(err)
      })
    }
    res.json(data)
  })
}

//get all categories
exports.list = (req, res) => {
  Category.find({}).exec((err, data) => {
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

  category.find({slug}).exec((err, category)=>{
    if(err){
      return res.status(400).json({
        error: errorHandler(err)
      })
    }
    res.json(category)
  })
}

// remove category
exports.remove = (req, res) => {
  const slug = req.params.slug.toLowerCase();

  Category.findOneAndRemove({ slug }).exec((err, data) => {
      if (err) {
          return res.status(400).json({
              error: errorHandler(err)
          });
      }
      res.json({
          message: 'Category deleted successfully'
      });
  });
};