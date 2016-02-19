/**
 * Created by chenzhen on 15/12/14.
 */

function config($stateProvider, $urlRouterProvider , $httpProvider){

    //default route
    $urlRouterProvider.otherwise("/home/");

    $stateProvider
        //index page
        .state('home', {
            abstract: true,
            url: '/home',
            templateUrl: "ngviews/common/layout.html"
        })
        .state('home.default', {
            url:'/',
            templateUrl: "ngviews/home/default.html",
            data: {pageTitle: '首页'}
        })
}

angular
    .module('indigo')
    .config(config)
    .run()