var routeApp = angular.module('routeApp',['ngRoute']);
routeApp.config(['$routeProvider',function ($routeProvider) {
    $routeProvider
        .when('/Book/:bookId', {
            templateUrl: 'views/book.html',
            controller: 'BookController',
            resolve: {
                //I will cause a 1 second delay
                delay: function($q, $timeout) {
                    var delay = $q.defer();
                    $timeout(delay.resolve, 1000);
                    return delay.promise;
                }
            }
        })
        .when('/Book/:bookId/ch/:chapterId', {
            templateUrl: 'views/chapter.html',
            controller: 'ChapterController'
        });
}]);

routeApp.controller('MainController', function($scope, $route, $routeParams, $location) {
    $scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;
});

routeApp.controller('BookController', function($scope, $routeParams) {
    $scope.name = "BookController";
    $scope.params = $routeParams;
});

routeApp.controller('ChapterController', function($scope, $routeParams) {
    $scope.name = "ChapterController";
    $scope.params = $routeParams;
});
