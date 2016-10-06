var express = require('express');
var app = express();
var BodyParser = require('body-parser');
app.use(BodyParser.json());

app.post('/posts',function(req,res){
  console.log(req.body);
})

app.listen(3000,function(){
  console.log('running on port 3000...');
})
