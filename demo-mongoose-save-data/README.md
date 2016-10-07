# mongodb 数据库操作

命令行操作

### 一、启动

1. mkdir -p data/db （ -p 创建data文件夹并在 data 下新建 db 子文件夹）

2. mongod --dbpath=./data/db


### 二、启动操作界面

- 方式：

   1. 用户图形接口 GUI；  

   2. 命令行接口 CLI

   对于 mongodb 我们使用 mongo shell 命令行操作

- 启动 Mongo Shell 的形式：$ mongo

### 三、创建一个数据库

```
 $ use database_Name
```

数据库是 mongodb 中的顶级储存单位，之下一级是**集合**

### 四、创建一个集合

```
 $ db.createCollection('collection_Name')
```

#### 插入数据记录

- 一个集合 （例如，posts），里面可以插入多个数据记录

```
 $ db.posts.insert({title:'lin'})
```

#### 查看集合中的所有记录

```
 $ db.posts.find()
```

### 修改一条记录（了解内容）

```
db.posts.update({_id: ObjectId('xxx')}, {$set: {title: 'mongodb'}})
```

### 删除一条记录

```
db.posts.remove({_id: ObjectId('xxx')})
```
### 删除 posts 集合中的所有记录

```
db.posts.remove({})
```

### 删除数据库

假设我们的数据库叫做 digicity-express-api

```
use digicity-express-api
db.dropDatabase()
```

## Hello Ada

![](https://github.com/happypeter/digicity-express-api/blob/master/doc/img/001-ada.png?raw=true)
