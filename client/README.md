前端展示页面

### 本地运行代码

```
npm install
npm start
```

- 例如把一篇博客当做 resource，资源

 - GET /posts  列出所有博客

 - GET /posts/:post_id  打开一篇博客

 - POST /posts/:post_id  新建一篇文章

 - PUT /posts/:post_id  更新一篇博客

 - DELETE /posts/:post_id  删除一篇博客



## REST 架构的两大优势

1. 请求的格式符合正常用户思维

2. 最大程度尊重了 http verb 设计者的原始意图

___

## axios  

### https://github.com/mzabriskie/axios

- 传统上我们认为它就是发 ajax 请求的，类似 $.ajax()

- axios 就是用来：发 http 请求的

promise 用来做异步请求的方法

___

## .then

```
.then(res => {
  console.log(res.data.message);
  this.context.router.push('/')  //react 自己的一种跳转 与后台无关
})

```
