(function(){
    "use strict";
    function userManagerCtrl($scope, userService, isNew){//}, uiGridConstants, $filter){
        var self = this;
        $scope.isNew = isNew;
        $scope.isShowMessage = false;

        $scope.appUser = {'userName': '',
                          'password': "",
                          'email': "",
                          'isAdmin': false,
                          'gender': "F"};

        if (isNew){
            $scope.titleLabel = "Sign Up";
            $scope.btnTitle = "Sign Up";
        } else {
            $scope.titleLabel = "User Details";
            $scope.appUser = $scope.$parent.currentUser;
            $scope.btnTitle = "Save";
        }

        $scope.onSave = function(){
            if (isNew){

            } else{
                userService.updateUser($scope.appUser).then(function () {
                    $scope.$parent.currentUser = $scope.appUser;
                    $scope.saveMessage = "Update user successfully!";
                    $scope.isShowMessage = true;
                }, function () {
                    $scope.saveMessage = "Update user fail";
                    $scope.isShowMessage = true;
                });
            }
        }

        
    }
    angular.module('recipesApp').controller('userManagerCtrl', ['$scope', 'userService', 'isNew', userManagerCtrl])
})();