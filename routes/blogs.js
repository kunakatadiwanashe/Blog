var express = require('express')
var router = express.Router();

router.get('/', (req, res, next) => {
    res.render('blogs')
});

module.exports = router;