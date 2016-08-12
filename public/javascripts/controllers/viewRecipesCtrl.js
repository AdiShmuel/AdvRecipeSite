
(function(){
    "use strict";
    function viewRecipesCtrl($scope, $routeParams, recipeDetailsService, recipeService, categoriesService){

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
                if (!_.isEmpty(data)){
                    for (var i = 0; i < data.length; i++) {
                        if (data[i].id == $scope.categoryId) {
                            $scope.filter = data[i].name;
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
        
        $scope.like = function (data) {
            recipeService.like(data).then(function (sucess) {
                if (sucess) {
                    data.likeAmount++;
                }
                else {
                    alert("error in like");
                }
            });
        }
    }
    angular.module('recipesApp').controller('viewRecipesCtrl', ['$scope', '$routeParams', 'recipeDetailsService', 'recipeService', 'categoriesService',  viewRecipesCtrl])
})();