var express = require('express');
var app = express();

var mongoose = require('mongoose');

//链接数据库和服务器端
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/digicity-express-api');

//验证是否连接成功
var db = mongoose.connection;
db.on('error', console.log);
db.once('open', function() {
  console.log('success!')
});


var Schema = mongoose.Schema;

//记录要存储的数据的基本结构
var PostSchema = new Schema(
  {
    title: String,
    content: String
  }
);

var Post = mongoose.model('Post',PostSchema)


//路由代码
app.post('/posts', function(req, res){
  console.log('run post.save()');
  //模块 实例化
  var post = new Post({title:"myTitle", content: "myConent"})
  post.save(function(err){
    if(err) return console.log(err);
    console.log('saved');
  });
});

app.listen(3000, function(){
  console.log('running on port 3000.....');
});
