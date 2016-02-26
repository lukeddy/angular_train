'use strict';

angular.module('MyAPP', [ 'ngStorage', 'ngRoute', 'angular-loading-bar'])
    .config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {

    /**
     * 路由配置
     */
    $routeProvider.
        when('/', {
            templateUrl: 'views/home.html',
            controller: 'HomeCtrl'
        }).
        when('/signin', {
            templateUrl: 'views/signin.html',
            controller: 'HomeCtrl'
        }).
        when('/signup', {
            templateUrl: 'views/signup.html',
            controller: 'HomeCtrl'
        }).
        when('/profile', {
            templateUrl: 'views/profile.html',
            controller: 'HomeCtrl'
        }).
        otherwise({
            redirectTo: '/'
        });

    /**
     * 拦截器配置
     */
    $httpProvider.interceptors.push(['$q', '$location', '$localStorage', function($q, $location, $localStorage) {
            return {
                'request': function (config) {
                    config.headers = config.headers || {};
                    if ($localStorage.token) {
                        config.headers.Authorization = 'Bearer ' + $localStorage.token;
                    }
                    return config;
                },
                'responseError': function(response) {
                    if(response.status === 401 || response.status === 403) {
                        $location.path('/signin');
                    }
                    return $q.reject(response);
                }
            };
        }]);

    }
]);