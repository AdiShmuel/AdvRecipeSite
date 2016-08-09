(function(){
    "use strict";
    function usersGridCtrl($scope, allUsers, userService,$cookieStore){//}, uiGridConstants, $filter){
        var self = this;
        $scope.gridUsers = allUsers.data;
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

    //    var checkBoxCell = '<input type="checkbox" ng-model="row.entity.isAdmin" disabled>';
        var cellEditable = false;
        if (!_.isEmpty($scope.$parent.currentUser) &&  $scope.$parent.currentUser.isAdmin){
            cellEditable = true;
        //    checkBoxCell = '<input type="checkbox" ng-model="row.entity.isAdmin" >';
        }

        var columnDef = [
            {name: 'userName', displayName: 'User Name', enableCellEdit: false},
            {field: 'email', displayName: 'Email', enableCellEdit: false},
            {field: 'isAdmin', displayName: 'Is Admin', type: 'boolean', enableCellEdit: cellEditable, enableCellEditOnFocus: true},//, cellTemplate: checkBoxCell },
            {field: 'gender', displayName: 'Gender', enableCellEdit: false}];
        // enableFiltering: false}//,
        if (!_.isEmpty($scope.$parent.currentUser) && $scope.$parent.currentUser.isAdmin){
            columnDef[columnDef.length] = {name: 'actions', displayName: 'Actions',
                cellTemplate: '<button id="deleteBtn" type="button" class="btn-small btn-danger" ng-click="getExternalScopes().deleteRelation(row.entity)"><i class="fa fa-trash" aria-hidden="true"></i> </button>', enableFiltering: false};
        }



        $scope.gridUsersOptions =  {
            data: "gridUsers",
            enableSorting: true,
            enableFiltering: true,
            columnDefs: columnDef
       };


    $scope.gridUsersOptions.onRegisterApi = function(gridApi) {
        //set gridApi on scope
        $scope.gridApi = gridApi;
        gridApi.rowEdit.on.saveRow($scope, $scope.saveRow);
            // gridApi.edit.on.afterCellEdit($scope, function(rowEntity, colDef, newValue, oldValue) {
            //     if (newValue != oldValue){
            //         var user = {'userName': rowEntity.name,
            //                     'password': rowEntity.password,
            //                     'email': rowEntity.email,
            //                     'isAdmin': rowEntity.isAdmin,
            //                     'gender': rowEntity.gender};
            //
            //         userService.updateUser(user).then(function () {
            //             $scope.$apply();
            //         })
            //     }
            //     //Alert to show what info about the edit is available
            //    // alert('Column: ' + colDef.name + ' ID: ' + rowEntity.email + ' isAdmin: ' + rowEntity.isAdmin);
            // });
    };

        $scope.saveRow = function( rowEntity ) {
            var promise = userService.updateUser(rowEntity);
            $scope.gridApi.rowEdit.setSavePromise( rowEntity, promise.promise );
            promise.resolve();
        };




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
    angular.module('recipesApp').controller('usersGridCtrl', ['$scope', 'allUsers', 'userService', '$cookieStore',  usersGridCtrl])
})();