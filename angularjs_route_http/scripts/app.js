var routeApp = angular.module('movieApp',['ngRoute']);

routeApp.run(function($rootScope) {
    $rootScope.appname = "欢迎使用AngularJS";
});
routeApp.config(['$routeProvider',function ($routeProvider) {
    $routeProvider.when('/movieList',{
            templateUrl:'views/route/movie_list.html',
            controller:'MovieListController'
        }).when('/movieDetail/:id',{
            templateUrl:'views/route/movie_detail.html',
            controller:'MovieDetailController'
        }).otherwise({
            redirectTo: '/movieList'
        });
}]);
