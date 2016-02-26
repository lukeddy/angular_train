/**
 * Created with JetBrains WebStorm.
 * User: jim.lavin
 * Date: 12/8/12
 * Time: 11:49 AM
 * To change this template use File | Settings | File Templates.
 */

'use strict';

/* App Module */

angular.module('localizeApp', ['localization','ui.bootstrap','ngResource','ngRoute']).
    config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
        when('/', {templateUrl:'views/home.html', controller:HomeController}).
        when('/edit/:index', {templateUrl:'views/form.html', controller:EditPersonController}).
        when('/new', {templateUrl:'views/form.html', controller:NewPersonController}).
        otherwise({redirectTo:'/'});
}]);