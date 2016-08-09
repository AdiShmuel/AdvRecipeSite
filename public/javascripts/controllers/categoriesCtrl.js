
(function(){
    
    
    "use strict";
    function categoriesCtrl($scope, categoriesService){//}, uiGridConstants, $filter){
        $scope.firstName = [{'userName': "Yarden Davidof"}];

        categoriesService.getAll().then(function (data) {
            $scope.categories = data;
        });
            // [{name: "Pasta", image: "../images/categories/pasta.jpg"},
            //     {name: "Breard", image: "../images/categories/bread.jpg"},
            //     {name: "Chicken", image: "../images/categories/chicken.jpg"},
            //     {name: "Dessert", image: "../images/categories/dessert.jpg"},
            //     {name: "Diet", image: "../images/categories/diet.jpg"},
            //     {name: "Fish", image: "../images/categories/fish.jpg"},
            //     {name: "Gluten Free", image: "../images/categories/gluten_free.jpg"},
            //     {name: "Meat", image: "../images/categories/meat.jpg"},
            //     {name: "Slow Cooker", image: "../images/categories/slow_cooker.jpg"},
            //     {name: "Soup", image: "../images/categories/soup.jpg"},
            //     {name: "Vegeterian", image: "../images/categories/vegeterian.jpg"}];
    }
    angular.module('recipesApp').controller('categoriesCtrl', ['$scope', 'categoriesService',  categoriesCtrl])
})();