'use strict';

angular.module('ngShowcaseApp').controller('treeData', 
  function ($scope,$timeout,CityData,standardTreeData,industryTreeData) {
  var vm = $scope.vm = {};
  vm.baseData = CityData;
  // $scope.ayy = ;
  $scope.list = ["1"];
  $scope.Architecture = vm.baseData.U_JZWJG001;

  $scope.addRule = function(){
    $scope.list.length++;
  }
  
  $scope.deleteRule = function(){
    $scope.list.length--;
  }

  $scope.showB = function(){
    $scope.showB = true;
  }
  // vm.tree;
  $scope.init = function(tree){
      // $timeout(function(){
         // vm.tree = new standardTreeData(tree,false);
        // var classA =  vm.baseData.C_BDDZ001;
        // for(var i = 0;i < classA.length;i++){
        //   console.log(classA[i].length)
        //   if(classA.checked == "true"){
        //     vm.tree.check(vm.countries[i],true);
        //   }else{
        //     var classB = vm.countries[i].items;
        //     if(classB != undefined){
        //       for(var j = i;j < classB.length; j++){
        //           if(classB[j].checked == "true"){
        //             vm.tree.check(classB[j],true);
        //           }else {
        //             var classC = vm.countries[i].items[j].items;
        //             if(classC != undefined){
        //               for(var k = j; k < classC.length; k++){
        //                 if(classC[k].checked == "true"){
        //                   vm.tree.check(classC[k],true);
        //                 }else{
        //                   var classD = vm.countries[i].items[j].items[k].items;
        //                   if(classD != undefined){
        //                     for(var y = j; y < classD.length; y++){
        //                       if(classD[y].checked == "true"){
        //                         vm.tree.check(classD[y],true);
        //                       }
        //                     }
        //                   }
        //                 }
        //               }
        //             }
        //           }
        //         }
        //       }
        //     }
          // }
      // })
    }
    // 默认隐藏二级菜单
    $scope.showClassB = false;
    
    // $scope.isShow = function(tree){
      
    // }

    // $scope.classA = function(time){
     // $scope.isFolded = function(data){
     //  // $scope.$apply();
     //      vm.tree.isFolded(data);
     //    console.log();
     // }
      //标的地址属于
      
      // console.log(vm.baseData.C_BDDZ001[0].length)
      //行业类型属于
       vm.standardTree = new standardTreeData(vm.baseData.C_BDDZ001,false);
       vm.tree = new industryTreeData(vm.baseData.C_HYLX001,false);
      
    // };

  
  // vm.tree = new TreeData(vm.baseData.C_HYLX001,false);
 

});