(function(){
    "use strict";
    function usersManagerGridCtrl($scope, userService){//}, uiGridConstants, $filter){
        var self = this;
      //  $scope.searchedDisplayStation = "";
     //   $scope.searchedMessage = "";
     //   $scope.gridUsers = [];
        // userService.getAll().then(function (data) {
        //     $scope.gridUsers = data.data;
        // })
        $scope.gridUsers = [{'userName': "Gal Cohen"
  //  , 'password': "1234"// nameGenderHost[1]
    , 'email': "galcohen92@gmail.com"//nameGenderHost[0] + '.' + nameGenderHost[1] + '@' + nameGenderHost[3]
    , 'isAdmin': true// addresses[i]
    , 'gender': "M"}];
     //   $scope.gridData = messageDisplayRelations.data;
     //   $scope.gridScope = {
        //     deleteRelation: function(messageDisplayRelation){
        //         messageService.removeMessageDisplayRelation(messageDisplayRelation)
        //             .success(function(deletedRelation){
        //                 messageDisplayRelations.data = _.reject(messageDisplayRelations.data, function (relation) {
        //                     return relation.messageId === deletedRelation.messageId &&
        //                         relation.displayStationId == deletedRelation.displayStationId;
        //                 })
        //
        //                 $scope.gridData = messageDisplayRelations.data;
        //             })
        //             .error(function () {
        //                 console.log("error")
        //             })
        //     }
        // };

        // $scope.gridUsersOptions = {
        //     data: "gridUsers"//,
        //     // enableSorting: true,
        //     // columnDefs: [
        //     //     { name: 'userName', enableSorting: false },
        //     //     { name: 'email' },
        //     //     { name: 'isAdmin', visible: false },
        //     //     { name: 'gender'}
        //     // ]
        // };

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
    angular.module('recipesApp').controller('usersManagerGridCtrl', ['$scope', 'userService',  usersManagerGridCtrl])
})();