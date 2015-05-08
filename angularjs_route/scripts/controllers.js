routeApp.controller('RouteListCtl',function($scope) {
    $scope.title="列表标题";
});
routeApp.controller('RouteDetailCtl',function($scope, $routeParams) {
    $scope.id = $routeParams.id;
});