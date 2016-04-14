这是一个简单的TODO项目

技术栈：nodejs,express,mongoose,angular

运行：
1.确保已经安装了node和npm环境

2.进入根目录执行
npm install  //安装依赖
node server.js //启动服务器

3.浏览器打开http://localhost:3000测试


其他：我这里使用了node动态加载模块nodemon,这样每次服务器文件发生更改的时候就会自动加载，方便开发。nodemon使用方法：
1.全局安装nodemon模块  
npm install -g nodemon 
2.使用nodemon启动服务器  
nodemon server.js  

node热更新模块推荐:  
https://github.com/isaacs/node-supervisor  
https://github.com/remy/nodemon  
https://github.com/nodejitsu/forever  

