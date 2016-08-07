
(function(){
    "use strict";
    function viewRecipesCtrl($scope, $routeParams, recipeDetailsService, categoriesService){

        if ($routeParams.email) {
            $scope.filter = $routeParams.email;
        
            recipeDetailsService.getRecipesByUser($scope.filter).then(function (data) {
                if (!_.isEmpty(data) && !_.isEmpty(data.data)){
                    $scope.recipes = data.data;
                }
            });
        }
        else if ($routeParams.categoryId) {
            $scope.categoryId = $routeParams.categoryId;
            
            categoriesService.getAll().then(function (data) {
                if (!_.isEmpty(data) && !_.isEmpty(data.data)){
                    for (var i = 0; i < data.data.length; i++) {
                        if (data.data[i].id == $scope.categoryId) {
                            $scope.filter = data.data[i].name;
                            break;
                        }
                    }
                }
            });
        
            recipeDetailsService.getRecipesByCategory($scope.categoryId).then(function (data) {
                if (!_.isEmpty(data) && !_.isEmpty(data.data)){
                    $scope.recipes = data.data;
                }
            });
        }
        else {
            recipeDetailsService.getAllRecipes().then(function (data) {
                if (!_.isEmpty(data) && !_.isEmpty(data.data)){
                    $scope.recipes = data.data;
                }
            });
        }
    }
    angular.module('recipesApp').controller('viewRecipesCtrl', ['$scope', '$routeParams', 'recipeDetailsService', 'categoriesService',  viewRecipesCtrl])
})();