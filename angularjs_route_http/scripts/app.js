var routeApp = angular.module('movieApp',['ngRoute']);

routeApp.run(function($rootScope) {
    $rootScope.appname = "欢迎使用AngularJS";
});
routeApp.config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {
    $routeProvider.when('/movieList',{
            templateUrl:'views/route/movie_list.html',
            controller:'MovieListController'
        }).when('/movieDetail/:id',{
            templateUrl:'views/route/movie_detail.html',
            controller:'MovieDetailController'
        }).otherwise({
            redirectTo: '/movieList'
        });

    //HTTP拦截器,文档地址：http://docs.angularjs.cn/api/ng/service/$http#interceptors
    $httpProvider.interceptors.push(['$q', '$location', function($q, $location) {
        return {
            'request': function (config) {
                config.headers = config.headers || {};
                //if ($localStorage.token) {
                //    config.headers.Authorization = 'Bearer ' + $localStorage.token;
                //}
                //TODO 向请求头中加入信息，如token
                config.headers.CustomizeHeader = 'helloworld';
                console.log("拦截request");
                return config;
            },
            'responseError': function(response) {
                //TODO 错误处理，如：如果服务器端返回401,403等错误，跳转到登录页,如下：
                if(response.status === 401 || response.status === 403) {
                    $location.path('/signin');
                }
                console.log("拦截response");
                return $q.reject(response);
            }
        };
    }]);

}]);
