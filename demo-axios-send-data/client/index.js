var axios = require('axios');

var data={
  title:'lin',
  content:'tianqi'
}


axios.post('http://localhost:3000/posts',data)
