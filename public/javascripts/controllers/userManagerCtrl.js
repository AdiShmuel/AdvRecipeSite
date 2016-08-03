(function(){
    "use strict";
    function userManagerCtrl($scope, userService, isNew){//}, uiGridConstants, $filter){
        var self = this;
        $scope.isNew = isNew;

        $scope.appUser = {'userName': '',
                          'password': "",
                          'email': "",
                          'isAdmin': false,
                          'gender': "F"};

        if (isNew){
            $scope.titleLabel = "Sign Up";
        } else {
            $scope.titleLabel = "User Details";
            // $scope.appUser
        }
        // $scope.popularUsers = [{'userName': "Yarden Davidof"
        //     //  , 'password': "1234"// nameGenderHost[1]
        //     , 'email': "yardo.david@gmail.com"//nameGenderHost[0] + '.' + nameGenderHost[1] + '@' + nameGenderHost[3]
        //     , 'isAdmin': true// addresses[i]
        //     , 'gender': "F"},
        //     {'userName': "Gal Cohen"
        //         //  , 'password': "1234"// nameGenderHost[1]
        //         , 'email': "galcohen92@gmail.com"//nameGenderHost[0] + '.' + nameGenderHost[1] + '@' + nameGenderHost[3]
        //         , 'isAdmin': true// addresses[i]
        //         , 'gender': "M"}];
        //

    }
    angular.module('recipesApp').controller('userManagerCtrl', ['$scope', 'userService', 'isNew', userManagerCtrl])
})();