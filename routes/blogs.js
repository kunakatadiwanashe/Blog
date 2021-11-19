var express = require('express')
var router = express.Router();
const Blog = ('../models/blog.js');

router.get('/', (req, res, next) => {
    // res.render('blogs')
    Blog.find()
           .then((result) => res.send(result))
           .catch((err) => console.log(err))
});
 router.get('/new', (req, res, next) => {
     const blog = new Blog({
         title: 'Tadiwanashe@uncommon',
         body:'First day at uncommon.org'
     })
     blog.save()
            .then((result)=> res.send(result))
            .catch((err) => {console.log(err)})
 })

module.exports = router;