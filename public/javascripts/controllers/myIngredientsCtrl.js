/**
 * Created by galco on 7/26/2016.
 */
angular.module('recipesApp').controller('myIngredientsCtrl',   function($scope, $http){
    $scope.dataLoaded = false;


    $scope.gridOptions = {
        enableFiltering: false,
        onRegisterApi: function(gridApi) {
            $scope.gridApi = gridApi;
        },
        columnDefs: [
            { field: 'name' },
            { field: 'fat'},
            { field: 'calories' }
        ]
    };
    
    $scope.gridOptions.minRowsToShow = 15;

    $http.get('/api/dataservice/GetIngredientsByAppUser/' + $scope.currentUser.email).success(function(data) {
        $scope.gridOptions.data = data;
        $scope.dataLoaded = true;
    });

});