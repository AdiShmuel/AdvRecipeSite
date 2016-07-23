(function(){
    "use strict";
    function usersManagerGridCtrl($scope,$location, userService){//}, uiGridConstants, $filter){
        var self = this;

        $scope.connected = false; 
        $scope.menu = [
            {label: 'Home', route: '#/'},
            {label: 'DNA', route: '#/dna'},
            {label: 'Dna-list', route: '#/dna-list'},
            {label: 'Admin', route: '#/admin'}

        ]

        $scope.currentUser = {};
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


        $scope.login = function(){
            // Check if valid
            var userMail = $("#loginForm :input[name='userMail']").val();
            var userPassword = $("#loginForm :input[name='userPassword']").val();

            userService.getUser(userMail, userPassword).then(function(data) {
                    if (!_.isEmpty(data.data)){
                        $scope.currentUser = data.data;
                        $scope.connected = true;
                        $location.path('/home');
                    }else{
                        alert("invalid");
                    }
                },
                 function () {
                alert("fail");
            });
        }

        $scope.logout = function () {
            $scope.currentUser = {};
            $scope.connected = false;
        }

    }
    angular.module('recipesApp').controller('usersManagerGridCtrl', ['$scope', '$location', 'userService', usersManagerGridCtrl])
})();