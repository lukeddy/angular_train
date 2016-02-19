/**
 * Created by chenzhen on 15/12/14.
 */

angular.module('indigo').controller('MainController', function ($scope, $rootScope, Jsonp, $q, MovieService, demoOffCanvas) {

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

});
