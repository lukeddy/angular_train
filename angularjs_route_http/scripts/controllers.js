routeApp.controller('MovieListController',function($scope,$http){
    $http.get('data/movies.json').success(function(data, status, headers, config) {
        console.log(data.movies);
        $scope.movieList = data.movies;
    }).error(function(data, status, headers, config) {
        //alert("获取电影列表信息失败！");
        $scope.hasError=true;
        $scope.msg="获取电影列表信息失败!";
    });
});
routeApp.controller('MovieDetailController',function($scope,$http,$routeParams){
    $http.get('data/movies.json').success(function(data, status, headers, config) {
        console.log(data.movies);
        $scope.movie= data.movies[$routeParams.id];
    }).error(function(data, status, headers, config) {
        //alert("获取电影详情失败！");
        $scope.hasError=true;
        $scope.msg="获取电影详情失败!";
    });
});