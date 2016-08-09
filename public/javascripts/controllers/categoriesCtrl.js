
(function(){
    
    
    "use strict";
    function categoriesCtrl($scope, categoriesService, recipeService, $location){//}, uiGridConstants, $filter){

        $scope.uploadsUrl = '../uploads/categories/'

        categoriesService.getAll().then(function (data) {
            $scope.categories = data;
        });

        $scope.search = function () {
            recipeService.search($scope.searchData).then(function (data) {
                $location
            }); 
        }
    }
    angular.module('recipesApp').controller('categoriesCtrl', ['$scope', 'categoriesService', 'recipeService', '$location',  categoriesCtrl])
})();