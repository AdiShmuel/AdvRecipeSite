
(function(){
    "use strict";
    function categoriesCtrl($scope, categoriesService, recipeService, $location){//}, uiGridConstants, $filter){

        $scope.uploadsUrl = '../uploads/categories/'

        categoriesService.getAll().then(function (response) {
            $scope.categories = response.data;
        });
        
        $scope.removeCategory = function (categoryId) {
            categoriesService.remove(categoryId).then(function (response) {
                
            });
        }
    }
    angular.module('recipesApp').controller('categoriesCtrl', ['$scope', 'categoriesService', 'recipeService', '$location',  categoriesCtrl])
})();