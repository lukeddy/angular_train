/**
 * Created by Administrator on 15-3-5.
 */
var myApp = angular.module('myApp', []); //注意app创建时需要添加第二个参数

myApp.controller('TimerController',function($scope,$timeout){
    var updateClock=function(){
        $scope.clock=new Date();
        $timeout(function(){
            updateClock();
        },1000);
    };
    updateClock();
});