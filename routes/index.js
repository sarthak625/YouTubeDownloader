const express = require('express');
const router = express.Router();
const http = require('http');
const request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Download Youtube Videos Instantly' });
});

router.post('/', (req, res, next)=>{
  console.log(req.body.url);
  let url = req.body.url;
  if (url.slice(0,8)!='https://'){
    url = 'https://'+url;
  }
  console.log(url);
  request(url,(err)=>{
    if (err){
      res.render('error',{'title':'Error','error':"The url you have entered is invalid"});
    }
    else{
      if (url.includes('youtube') || url.includes('youtu.be')){
        if (url ==='https://www.youtube.com' || url === 'https://youtube.com')
        res.render('error',{'title':'Error','error':"Enter the video url"});  
        else
          res.render("download",{ title:' Download ', url: url});
      }
      else{
        res.render('error',{'title':'Error','error':"The url you have entered is not a valid youtube url"});
      }
    }
  })
  
});


module.exports = router;
