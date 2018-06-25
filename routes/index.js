const express     = require('express');
const router      = express.Router();
const http        = require('http');
const request     = require('request');
const fs          = require('fs');
const ytdl        = require('ytdl-core');
const path        = require('path');

let percent = 0;

router.get('/percent',(req,res)=>{
  res.send(percent);
})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Download Youtube Videos Instantly' });
});

router.post('/', (request, response, next)=>{
  let url     = request.body.url;
  var appDir  = path.dirname(require.main.filename);
  let output  = path.join(appDir , 'downloads/video.mp4');
  let video   = ytdl(url);

  video.pipe(fs.createWriteStream(output));
  
  video.on('response', function(res) {
    var totalSize = res.headers['content-length'];
    var dataRead = 0;
    
    res.on('data', function(data) {
      dataRead += data.length;
      percent = dataRead / totalSize;
      percent = percent*100;
      process.stdout.cursorTo(0);
      process.stdout.clearLine(1);
      process.stdout.write((percent * 100).toFixed(2) + '% ');
      console.log("Percent strr"+percentStr);
    });

    res.on('end', function() {
      process.stdout.write('\n');
      console.log('completed');
    });
  });
  
  //Add https to the url
  if (url.slice(0,8)!='https://'){
    url = 'https://'+url;
  }
  
  let validUrl = ytdl.validateURL(url);

  if (validUrl){
    response.render("download",{ title:' Download ', url: url, percent: percent });
  }
  else{
    response.render('error', { title :'Error', error :"The url you have entered is not a valid youtube url"});
  }

});


module.exports = router;
