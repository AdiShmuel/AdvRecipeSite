(function(){
    "use strict";
    function usersGridCtrl($scope, allUsers, userService){//}, uiGridConstants, $filter){

        // Insert users
    //     var path = "/api/dataservice/PostAppUser";
    // var c = {'userName': "Yarden Davidof"
    //           , 'password': "1234"// nameGenderHost[1]
    //         , 'email': "yardo.david@gmail.com"//nameGenderHost[0] + '.' + nameGenderHost[1] + '@' + nameGenderHost[3]
    //         , 'isAdmin': true// addresses[i]
    //         , 'gender': "F"};
    //
    // $.ajax({
    //     type: "POST",
    //     url: path,
    //     data: c,
    //     success: function () {
    //         alert("success");
    //     },
    //     fail: function () {
    //         alert("fail");
    //     },
    //     dataType: "json"
    // });

        
        

        var self = this;
        $scope.gridUsers = allUsers.data;
        // $scope.gridUsers = [{'userName': "Yarden Davidof"
        //       , 'password': "1234"// nameGenderHost[1]
        //     , 'email': "yardo.david@gmail.com"//nameGenderHost[0] + '.' + nameGenderHost[1] + '@' + nameGenderHost[3]
        //     , 'isAdmin': true// addresses[i]
        //     , 'gender': "F"},
        //     {'userName': "Gal Cohen"
        //         //  , 'password': "1234"// nameGenderHost[1]
        //         , 'email': "galcohen92@gmail.com"//nameGenderHost[0] + '.' + nameGenderHost[1] + '@' + nameGenderHost[3]
        //         , 'isAdmin': true// addresses[i]
        //         , 'gender': "M"}];

        //  $scope.searchedDisplayStation = "";
        //   $scope.searchedMessage = "";
        //   $scope.gridUsers = [];
        // userService.getAll().then(function (data) {
        //     $scope.gridUsers = data.data;
        // })

        //   $scope.gridData = messageDisplayRelations.data;
          $scope.gridScope = {
            deleteRelation: function(userToRemove){

                userService.removeUser(userToRemove.email)
                    .success(function () {
                        allUsers.data = _.reject(allUsers.data, function (relation) {
                                return relation.email === userToRemove.email;
                            });

                            $scope.gridUsers = allUsers.data;
                        })
                    .fail(function () {
                        console.log("error");
                    });
            }
        };

        var columnDef = [
            {name: 'userName', displayName: 'User Name', enableCellEdit: false},//, enableFiltering: true},
            {field: 'email', displayName: 'Email', enableCellEdit: false},//, enableFiltering: true},
            {field: 'isAdmin', displayName: 'Is Admin', type: 'boolean', enableCellEdit: true},//, enableFiltering: false},
            {field: 'gender', displayName: 'Gender', enableCellEdit: false}];
        // enableFiltering: false}//,
        if (!_.isEmpty($scope.$parent.currentUser) && $scope.$parent.currentUser.isAdmin){
            columnDef[columnDef.length] = {name: 'actions', displayName: 'Actions',
                cellTemplate: '<button id="deleteBtn" type="button" class="btn-small btn-danger" ng-click="getExternalScopes().deleteRelation(row.entity)"><i class="fa fa-trash" aria-hidden="true"></i> </button>', enableFiltering: false};
        }



        $scope.gridUsersOptions =  {
           data: "gridUsers",
            enableSorting: true,
            columnDefs: columnDef
       };

        // $scope.gridUserdOptions = {
        //   //  enableFiltering: true,
        //    // enableScrollbars: false,
        //     data:'gridUsers',
        //     columnDefs:[
        //         {name: 'userName', displayName: 'User Name'},//, enableFiltering: true},
        //         {field: 'email', displayName: 'Email'},//, enableFiltering: true},
        //         {field: 'isAdmin', displayName: 'Is Admin'},//, enableFiltering: false},
        //         {field: 'gender', displayName: 'Gender'},// enableFiltering: false}//,
        //         // {name: 'options', displayName: 'Options',
        //         //     cellTemplate: '<button id="deleteBtn" type="button" class="btn-small" ng-click="getExternalScopes().deleteRelation(row.entity)">Delete</button>', enableFiltering: false}
        //     ]
        // };

        // $scope.filter = function(){
        //     $scope.gridData = messageDisplayRelations.data;
        //     self.filterByDisplayStation();
        //     self.filterByMessage();
        // };
        //
        // self.filterByDisplayStation = function() {
        //     $scope.gridData = $filter('filter')($scope.gridData, {'displayStationId': $scope.searchedDisplayStation}, undefined);
        // };
        //
        // self.filterByMessage = function() {
        //     $scope.gridData = $filter('filter')($scope.gridData, {'messageId': $scope.searchedMessage}, undefined);
        // };
    }
    angular.module('recipesApp').controller('usersGridCtrl', ['$scope', 'allUsers', 'userService',  usersGridCtrl])
})();