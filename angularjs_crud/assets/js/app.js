angular.module('CrudApp', [ 'ngRoute']).config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/', {templateUrl: 'assets/tpl/lists.html', controller: ListCtrl}).
      when('/add-user', {templateUrl: 'assets/tpl/add-new.html', controller: AddCtrl}).
      when('/edit/:id', {templateUrl: 'assets/tpl/edit.html', controller: EditCtrl}).
      otherwise({redirectTo: '/'});
}]);


function ListCtrl($scope, $http) {
    //$http.get('assets/data/users.json').success(function(data) {
    //  console.log(data);
    //  $scope.users = data.users;
    //});
    var users=[
      {
        "username":"zhangsan",
        "first_name":"张",
        "last_name":"三",
        "address":"成都天府软件园地址1"
      },
      {
        "username":"lisi",
        "first_name":"李",
        "last_name":"四",
        "address":"成都天府软件园地址2"
      },
      {
        "username": "wangwu",
        "first_name": "王",
        "last_name": "五",
        "address": "成都天府软件园地址3"
      }
    ];

    $scope.users=[];
    $scope.users=users;
}

function AddCtrl($scope, $http, $location) {
  $scope.add_new = function(user, AddNewForm) {
      console.log(user);
      $scope.users.push(user);
      console.log($scope.users);
      $location.path('/');
  };
}

function EditCtrl($scope, $http, $location, $routeParams) {
  var id = $routeParams.id;
  $scope.activePath = null;

  $http.get('api/users/'+id).success(function(data) {
    $scope.users = data;
  });

  $scope.update = function(user){
    $http.put('api/users/'+id, user).success(function(data) {
      $scope.users = data;
      $scope.activePath = $location.path('/');
    });
  };

  $scope.delete = function(user) {
    console.log(user);

    var deleteUser = confirm('Are you absolutely sure you want to delete?');
    if (deleteUser) {
      $http.delete('api/users/'+user.id);
      $scope.activePath = $location.path('/');
    }
  };
}