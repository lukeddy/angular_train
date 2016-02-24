/**
 * Created with JetBrains WebStorm.
 * User: jim.lavin
 * Date: 12/8/12
 * Time: 12:19 PM
 * To change this template use File | Settings | File Templates.
 */

'use strict';

angular.module('localizeApp', ['localization','ui.bootstrap','ngResource','ngRoute']).controller("AppController",function($scope, localize){
    $scope.People = [{FirstName:"Jim", LastName:"Lavin", Email:"jlavin@jimlavin.net", Bio:"Creator and Host of Coding Smackdown TV"}];

    $scope.setEnglishLanguage = function() {
        localize.setLanguage('en-US');
    };

    $scope.setPigLatinLanguage = function() {
        localize.setLanguage('es-es');
    };
    $scope.setChineseLanguage = function() {
        localize.setLanguage('zh-CN');
    };
    $scope.getValue = function(){
        console.log(localize.getLocalizedString('_HomeControllerTitle_'));
    }
});

//function AppController($scope, localize) {
//    $scope.People = [{FirstName:"Jim", LastName:"Lavin", Email:"jlavin@jimlavin.net", Bio:"Creator and Host of Coding Smackdown TV"}];
//
//    $scope.setEnglishLanguage = function() {
//        localize.setLanguage('en-US');
//    };
//
//    $scope.setPigLatinLanguage = function() {
//        localize.setLanguage('es-es');
//    };
//    $scope.setChineseLanguage = function() {
//        localize.setLanguage('zh-CN');
//    };
//    $scope.getValue = function(){
//        console.log(localize.getLocalizedString('_HomeControllerTitle_'));
//    }
//}

