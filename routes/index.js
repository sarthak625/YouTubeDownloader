var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Download Youtube Videos Instantly' });
});

router.post('/', (req, res, next)=>{
  console.log(req.body.url);
  res.end("<h1>Submitted</h1>");
});


module.exports = router;
