var express = require('express');
var app = express();
var mongoose = require('mongoose');


//链接数据库和服务器端
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/express-api');

var db = mongoose.connection;
db.on('error', console.log);
db.once('open', function() {
  console.log('success!')
});


app.post('/posts', function(req, res) {
  var mpost = {
    title: "lin",
    content: "tianqi"
  };
  mpost.save(function(err){
    if(err) return console.log(err);
    console.log('saved!');
  })
  res.json({message:'保存成功！'})
})


app.listen(3000, function() {
  console.log('running on port 3000')
})
