(function(){
    "use strict";
    function usersManagerGridCtrl($scope, userService){//}, uiGridConstants, $filter){
        var self = this;
      $scope.popularUsers = [{'userName': "Yarden Davidof"
          //  , 'password': "1234"// nameGenderHost[1]
          , 'email': "yardo.david@gmail.com"//nameGenderHost[0] + '.' + nameGenderHost[1] + '@' + nameGenderHost[3]
          , 'isAdmin': true// addresses[i]
          , 'gender': "F"},
          {'userName': "Gal Cohen"
          //  , 'password': "1234"// nameGenderHost[1]
          , 'email': "galcohen92@gmail.com"//nameGenderHost[0] + '.' + nameGenderHost[1] + '@' + nameGenderHost[3]
          , 'isAdmin': true// addresses[i]
          , 'gender': "M"}];


    }
    angular.module('recipesApp').controller('usersManagerGridCtrl', ['$scope', 'userService', usersManagerGridCtrl])
})();