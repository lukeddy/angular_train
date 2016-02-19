/**
 * angular main file
 * Created by chenzhen on 15/12/14.
 */
(function(){
    angular.module('indigo', [
        'ui.router',
        'ngAnimate',
        'cn.offCanvas',
    ])
})();
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
config.$inject = ["$stateProvider", "$urlRouterProvider", "$httpProvider"];

angular
    .module('indigo')
    .config(config)
    .run()
/**
 * Created by chenzhen on 15/12/16.
 */
angular.module('indigo').controller('DetailController', ["$scope", "Jsonp", "MovieService", "demoOffCanvas", function ($scope, Jsonp, MovieService, demoOffCanvas) {
    this.toggle = demoOffCanvas.toggle;
}])
/**
 * Created by chenzhen on 15/12/14.
 */

angular.module('indigo').controller('MainController', ["$scope", "$rootScope", "Jsonp", "$q", "MovieService", "demoOffCanvas", function ($scope, $rootScope, Jsonp, $q, MovieService, demoOffCanvas) {

    //this.getMovies('in_theaters');

    this.toggle = demoOffCanvas.toggle;
    $rootScope.movie = {};

    $scope.getMovies = function(type){
        MovieService.getMovies(type).then(function(data){
            $scope.movies = data;
        },function(){
            alert('拉取数据失败！');
        });
    }

    this.openDetail = function(id){
        demoOffCanvas.toggle();
        MovieService.getDetail(id).then(function(data){
            console.log(data);
            $rootScope.movie = data;
        },function(){
            alert('拉取数据失败！');
        });
    }

}]);

/**
 * Created by chenzhen on 15/12/14.
 */

angular.module('indigo').factory('Jsonp',function(){
    return {
        get: function(url, callback){
            var script = document.createElement('script');
            script.type = "text/javascript";
            script.src = url + (url.indexOf('?') > 0 ? '&' : '?') + 'callback=CB&' + Date.now();
            script.onload=function(){
                script.parentNode.removeChild(script);
            };
            window['CB'] = function (json) {
                callback(json);
            };
            document.head.appendChild(script);
        },
    }
});

angular.module('indigo').factory('demoOffCanvas', ["cnOffCanvas", function(cnOffCanvas){
    return cnOffCanvas({
        templateUrl: 'ngviews/home/detail.html'
    })
}])
/**
 * Created by chenzhen on 15/12/14.
 */

angular.module('indigo').service('MovieService', ["$q", "Jsonp", function($q, Jsonp){

    this.urlArr = {
        'in_theaters' : 'https://api.douban.com/v2/movie/in_theaters',
        'coming_soon' : 'https://api.douban.com/v2/movie/coming_soon',
        'top250' : 'https://api.douban.com/v2/movie/top250',
        'weekly' : 'https://api.douban.com/v2/movie/weekly',
        'us_box' : 'https://api.douban.com/v2/movie/us_box',
        'new_movies' : 'https://api.douban.com/v2/movie/new_movies',
    }


    this.getMovies = function(type){
        var url = this.urlArr[type];
        var deferred = $q.defer();
        Jsonp.get(url,function(data){
            if(data){
                deferred.resolve(data);
            }else{
                deferred.reject(data);
            }
        });
        return deferred.promise;
    }

    this.getDetail = function(id){
        var url = 'https://api.douban.com/v2/movie/subject/' + id;
        var deferred = $q.defer();
        Jsonp.get(url,function(data){
            if(data){
                deferred.resolve(data);
            }else{
                deferred.reject(data);
            }
        });
        return deferred.promise;
    }
}])
/**
 * Created by chenzhen on 15/12/14.
 */


function pageTitle($rootScope, $timeout){
    return {
        link: function(scope, element) {
            var listener = function(event, toState) {
                // Default title
                var title = 'Indigo | Angular Seed';
                // Create your own title pattern
                if (toState.data && toState.data.pageTitle) title = 'Indigo | ' + toState.data.pageTitle;
                $timeout(function() {
                    element.text(title);
                });
            };
            $rootScope.$on('$stateChangeStart', listener);
        }
    }
}
pageTitle.$inject = ["$rootScope", "$timeout"];;


angular
    .module('indigo')
    .directive('pageTitle', pageTitle)