
(function(){
    "use strict";
    function categoriesCtrl($scope, categoriesService, recipeService, $location){//}, uiGridConstants, $filter){

        $scope.uploadsUrl = '../uploads/categories/'

        categoriesService.getAll().then(function (data) {
            $scope.categories = data;
        });
        
    }
    angular.module('recipesApp').controller('categoriesCtrl', ['$scope', 'categoriesService', 'recipeService', '$location',  categoriesCtrl])
})();