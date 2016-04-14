var app=angular.module('todoModule', []);

//创建控制器
app.controller('MainCtrl',function($scope,$http){
	$scope.formData={};
	$scope.doneList=[];

	//列表TODO
	$http.get('/api/todos')
	.success(function(data){
      $scope.todos=data;
      console.log(data); 
	})
	.error(function(data){
		console.log('Error:'+data);
	});

	//添加TODO
	$scope.createTodo=function(){
		console.log($scope.formData);
		$http.post('/api/todos',$scope.formData)
		.success(function(data){
           $scope.formData={};
           $scope.todos=data;
           console.log(data);
		})
		.error(function(data){
			console.log('Error:'+data);
		});
	}

	//更新TODO
	$scope.todoDone=function(id){
       $http.put('/api/todos/'+id)
       .success(function(data){
          $scope.todos=data;
          console.log(data);
       })
       .error(function(data){
          console.log('Error:'+data);
       });
	}

	//删除TODO
	$scope.removeFinishedTodos=function(){
       $http.delete('/api/todos/')
       .success(function(data){
          $scope.todos=data;
          console.log(data);
       })
       .error(function(data){
          console.log('Error:'+data);
       });
	}
});


