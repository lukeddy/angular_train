var express=require('express');
var app=express();
var mongoose=require('mongoose');
var morgan=require('morgan');
var bodyParser=require('body-parser');
var methodOverride=require('method-override');
var port=process.env.PORT||3000


//配置mongodb地址
mongoose.connect('mongodb://localhost/tododb');
//设置静态文件根目录
app.use(express.static(__dirname+'/public'));
//日志记录
app.use(morgan('dev'));
//bodyParser用于解析客户端请求的body中的内容,内部使用JSON编码处理,url编码处理以及对于文件的上传处理.
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({type:'application/vnd.api+json'}));
//methodOverride中间件必须结合bodyParser中间件一起使用,为bodyParser中间件提供伪HTTP方法支持.
app.use(methodOverride());

//todo model定义,mongo会自动生成一个_id,所以不需要定义唯一标识
var Todo=mongoose.model('Todo',{
	text:String,
	done:Boolean
});

//开始定义api
app.get('/api/todos',function(req,res){
	//从数据库中查找todo列表
	Todo.find(function(err,todos){
		if(err) res.send(err);
		res.json(todos);
	})
});

//将新建的todo保存到数据库中并返回新的列表
app.post('/api/todos',function(req,res){
	Todo.create({
		text:req.body.text,
		done:false 
	},function(err,todo){
       if(err) res.send(err);
       //返回最新TODO列表
       Todo.find(function(err,todos){
          if(err){
          	res.send(err);
          }
          res.json(todos);
       });
	});
});

//更新
app.put('/api/todos/:todo_id',function(req,res){
   var query={_id:req.params.todo_id};

   Todo.findOne(query,function(err,todo){
   	 if(err) res.send(err);
   	 Todo.update(query,{done:!todo.done},{upsert:true},function(err,todos){
	     if(err) res.send(err); 
	     Todo.find(function(err,todos){
	       	  if(err) res.send(err);
	       	  //返回列表
	       	  res.json(todos); 
	     });
     });
   });
});

//删除todo
app.delete('/api/todos/',function(req,res){
	Todo.remove({
		done:true
	},function(err,todo){
       if(err) res.send(err); 
       Todo.find(function(err,todos){
       	  if(err) res.send(err);

       	  //返回列表
       	  res.json(todos); 
       });
	});
});


//其他所有非api请求，统一返回index.html
app.get('*',function(req,res){
	res.sendfile('./public/index.html');
});



//设置服务器启动端口
app.listen(port);
console.log("App started,listening on port:"+port);






