//TODO 添加服务器端程序使得项目可以通过node启动并访问
// var http = require("http");
// var url = require("url");
// var fs = require('fs');
//
// var server=http.createServer(function(request,response){
//     var pathname = url.parse(request.url).pathname;
//
//     if(pathname=="/"){
//
//         fs.readFile('./index.html', function(err, content){
//             if(err) {
//                 response.writeHead(404, { 'Content-Type':'text/plain; charset="UTF-8"' });
//                 response.write(err.message);
//                 response.end();
//             } else {
//                 response.writeHead(200, { 'Content-Type' : 'text/html; charset=UTF-8' });
//                 response.write(content);
//                 response.end();
//             }
//         });
//         //response.writeHead(200,{"Content-Type":"text/plain"});
//         //response.write("hello nodejs,I am index");
//         //response.end();
//     }else{
//         response.writeHead(200,{"Content-Type":"text/plain"});
//         response.write("404 Not found.");
//         response.end();
//     }
// });
// server.listen(8888);
//
// console.log("server started on port 8888");
var express = require('express'),
ejs = require('ejs'),
path = require('path');

var app = express();

app.engine('.html', ejs.__express);
app.set('view engine', 'html');
app.use(express.static('assets'));
app.set('views', __dirname);

//app.use(express.static(path.join(__dirname, 'assets')));


app.get('/', function(req, res){
  //res.send('hello world');
  console.log(app.get('views'));
  res.render('index',{});
});

app.listen(3000);
console.log("server started on port 3000");
