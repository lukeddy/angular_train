(function () {
    var app = angular.module("app", ["ui.router"]);
    // 定义一个 入口 标签
    app.directive("main", ["$state", function ($state) {
        return {
            restrict: 'AE',
            templateUrl: "scripts/views/main.html",
            replace: true,
            link: function ($scope, $element, $attr) {
                $scope.go = function (state) {
                    $state.go(state);
                }
            }
        }
    }]);
    app.controller("ScopeWatchController", ["$scope", function ($scope) {
        $scope.count = 0;
        $scope.results = [{name: "土豆", count: 0}, {name: "马铃薯", count: 0}, {name: "地瓜", count: 0}];
        $scope.$watch("results", function (values) {
            if (values) {
                var _count = 0;
                angular.forEach(values, function (value) {
                    try {
                        _count += parseInt(value.count);
                    } catch (ex) {
                        alert(ex.message);
                    }
                });
                $scope.count = _count;
            }
        }, true);
    }]);
    app.config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouter) {
        // login
        $stateProvider.state("main", {url: "/main.html", template: "<h2>覆盖默认ui-viewDefault</h2>"});
        // login
        $stateProvider.state("login", {url: "/login.html", templateUrl: "scripts/views/login.html"});
        // register
        $stateProvider.state("register", {url: "/register.html", templateUrl: "scripts/views/register.html"});
        // account
        $stateProvider.state("account", {url: "/account.html", templateUrl: "scripts/views/account.html"});
        // fuhe
        $stateProvider.state("fuhe", {
            url: "/fuhe.html",
            views: {
                "": {
                    templateUrl: 'scripts/views/fuhe/main.html'
                },
                "v1@fuhe": {
                    templateUrl: "scripts/views/fuhe/v1.html"
                },
                "v2@fuhe": {
                    templateUrl: "scripts/views/fuhe/v2.html"
                },
                "v3@fuhe": {
                    templateUrl: "scripts/views/fuhe/v3.html"
                }
            }
        });
        //
        // account
        $stateProvider.state("scopewatch", {
            url: "/scopewatch.html", templateUrl: "scripts/views/scopewatch.html", controller: "ScopeWatchController"
        });
        // 默认进入 main.html
        $urlRouter.otherwise("/main.html");
    }])
    angular.bootstrap(document, ["app"])
})();