/**
 * Created by galco on 7/23/2016.
 */
"use strict";

// app.controller('SecondCtrl', ['$scope', '$http', '$interval', 'uiGridConstants', function ($scope, $http, $interval, uiGridConstants) {
//
//
//
//     $http.get('https://cdn.rawgit.com/angular-ui/ui-grid.info/gh-pages/data/500_complex.json')
//         .success(function(data) {
//             $scope.gridOptions.data = data;
//
//             // $interval whilst we wait for the grid to digest the data we just gave it
//             $interval( function() {$scope.gridApi.selection.selectRow($scope.gridOptions.data[0]);}, 0, 1);
//         });

angular.module('recipesApp').controller('addIngredientsCtrl', function ($scope, $http, $log, $timeout) {
    $scope.gridOptions = {
        enableRowSelection: true,
        enableRowHeaderSelection: false
    };

    $scope.gridOptions.columnDefs =  [
            //{ field: '_score' }
             { field: 'fields.item_name' , name:'id' },
             { field: 'fields.nf_total_fat' , name:'fat'},
             { field: 'fields.nf_calories', name:'calories' }
    ];

    $scope.gridOptions.multiSelect = false;
    $scope.gridOptions.modifierKeysToMultiSelect = false;
    $scope.gridOptions.noUnselect = true;
    $scope.gridOptions.onRegisterApi = function( gridApi ) {
        $scope.gridApi = gridApi;
        gridApi.selection.on.rowSelectionChanged($scope, function (row) {
            var fields = row.entity.fields;
            $scope.c = {'name': fields.item_name,
                'calories': fields.nf_calories,'fat':fields.nf_total_fat,'user': $scope.currentUser.email//"galcohen92@gmail.com"
            };
        });
    };

    // $scope.toggleRowSelection = function() {
    //     $scope.gridApi.selection.clearSelectedRows();
    //     $scope.gridOptions.enableRowSelection = !$scope.gridOptions.enableRowSelection;
    //     $scope.gridApi.core.notifyDataChange( uiGridConstants.dataChange.OPTIONS);
    // };
    // $scope.gridOptions.multiSelect = true;
    //
    // $scope.getSelectedRows = function() {
    //     $scope.mySelectedRows = $scope.gridApi.selection.getSelectedRows();
    // };

    // $http.get('https://cdn.rawgit.com/angular-ui/ui-grid.info/gh-pages/data/500_complex.json')
    //     .success(function(data) {
    //         $scope.gridOptions.data = data;
    //         $scope.mySelectedRows = $scope.gridApi.selection.getSelectedRows();
    //         // $timeout(function() {
    //         //     if($scope.gridApi.selection.selectRow){
    //         //         $scope.gridApi.selection.selectRow($scope.gridOptions.data[0]);
    //         //     }
    //         // });
    //     });

    // $scope.info = {};
    //
    // $scope.toggleMultiSelect = function() {
    //     $scope.gridApi.selection.setMultiSelect(!$scope.gridApi.grid.options.multiSelect);
    // };
    //
    // $scope.toggleRow1 = function() {
    //     $scope.gridApi.selection.toggleRowSelection($scope.gridOptions.data[0]);
    // };

    // $scope.gridOptions.onRegisterApi = function(gridApi){
    //     //set gridApi on scope
    //     $scope.gridApi = gridApi;
    //     gridApi.selection.on.rowSelectionChangedBatch($scope,function(rows){
    //         var msg = 'rows changed ' + rows.length;
    //         $log.log(msg);
    //     });
    //
    // };

    // $scope.dataLoaded = false;

    $scope.$watch('search', function() {
        $scope.c = undefined;
        fetch();
    });


    function fetch() {
        if($scope.search != undefined) {
            var appId = "03542556";
            var appKey = "1c15d9345355328f56cda78506e9ebd1";
        

            $http.get("https://api.nutritionix.com/v1_1/search/" + $scope.search + "?fields="
                    + "item_name%2Cnf_calories%2Cnf_total_fat&appId=" + appId + "&appKey=" + appKey)
                .then(function (response) {
                  if( response.data.hits.length > 0) {
                      $scope.gridOptions.data = response.data.hits;
                      $scope.dataLoaded = true;
                  }
                    else
                  {
                      $scope.dataLoaded = false;
                  }
                });
        }
    }
    
    $scope.gridOptions.minRowsToShow = 15;


    $scope.select = function() {
        this.setSelectionRange(0, this.value.length);
    }

    $scope.addIngredient = function(index){
        var path = "/api/dataservice/createIngredient";

        $.ajax({
            type: "POST",
            url: path,
            data: $scope.c,
            success: function () {
                alert("success");
            },
            fail: function () {
                alert("fail");
            },
            dataType: "json"
        });
    }
});
