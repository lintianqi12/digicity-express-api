

```
curl -H "Content-Type: application/json" -X POST -d
'{"title":"myTitle","content":"myContent"}' http://localhost:3000/posts
```

参考代码： https://coding.net/u/happypeter/p/react-express-api-demo/git


# 项目部署

### google 的部署规范

- materialup.com


## 申请 aliyun 服务器

国外还有 AWS 可以用。

1.登陆

```
ssh root@139.196.28.83
```

2.创建一个新的普通用户

```
adduser peter --ingroup sudo
```

3.切换到普通用户

```
su peter
```

4.退出登陆

Ctrl-D


### 绑定域名 DNS

http://godaddy.com/ 上可以买到域名。但是我们这里模拟一下本地域名

```
sudo vim /etc/hosts
```

填写

```
139.196.28.83 peter.com
```

### 从 github clone 代码到服务器

安装 git

```
sudo apt-get install git
```


```
git clone xxx.git
```


### 安 nodejs

使用 nvm 来安装

安装 curl

```
sudo apt-get update
sudo apt-get install -y curl
```

运行安装 nvm 的脚本

```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.29.0/install.sh | bash
```

重新加载 nvm

```
source .bashrc
```

列出所有可以安装的 node 版本

```
nvm ls-remote
```

执行安装命令

```
nvm install v6.8.0
```

列出所有系统上的 node 版本

```
nvm ls
```

### 开始部署 client

安装所有依赖包

```
cd digicity-express-api/client/
npm install  # 使用 cnpm 会更快些
```


### 重新映射端口

```
npm run build # 得到 bundle.js
```

现在需要启动 server.js

```
mkdir public
cd public
mv ../dist/bundle.js .
mv ../index.html # 修改里面的 bundle.js 的路径
```


现在需要把 8080 端口，映射到 80（80端口是 http 服务的默认端口，通常都是默认打开的）

首先安装 nginx 服务器

```
sudo apt-get install -y nginx
```

先删除 default 页面

```
cd /etc/nginx/site_enabled/
sudo rm default
```

使用 vim 创建自己的配置文件

```
sudo vim client.conf
```

填写内容如下：

```
server {
    listen     80 default;
    server_name client.haoqicat.com;

    location / {
        proxy_pass http://localhost:8000;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header Host $http_x_forwarded_host;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_read_timeout 3m;
        proxy_send_timeout 3m;
    }
}
```

重启 nginx

```
sudo service nginx reload
```
