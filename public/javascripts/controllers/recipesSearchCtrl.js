angular.module('recipesApp').controller('recipesSearchCtrl',   function($scope,recipeService){
        $scope.search = function () {
            recipeService.search($scope.searchData).then(function (data) {
                $scope.recipes = data;
            });
        }

});