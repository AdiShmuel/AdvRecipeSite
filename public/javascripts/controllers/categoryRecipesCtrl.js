/**
 * Created by Yarden on 8/2/2016.
 */

(function(){
    "use strict";
    function categoryRecipesCtrl($scope, recipeService, $location, $routeParams){//}, uiGridConstants, $filter){
        $scope.category = $routeParams.name;
        $scope.id = $routeParams.id;

        recipeService.getAllByCategory($scope.category).then(function (data) {
           $scope.recipes = data;
        });

        $scope.like = function (data) {
            recipeService.like(data).then(function (sucess) {
                if(sucess)
                {
                    for (var x in $scope.recipes) {
                        if ($scope.recipes[x].id == data.id) {
                            $scope.recipes[x].likeAmount++;
                            return;
                        }
                    }
                }
                alert("error in like");
            });
        }
        // var recipe1 = {title: 'Sloppy Joe', content: 'In a medium skillet over medium heat, brown the ground beef, onion, and green pepper; drain off liquids. Stir in the garlic powder, mustard, ketchup, and brown sugar; mix thoroughly. Reduce heat, and simmer for 30 minutes. Season with salt and pepper.',
        // image: '../images/recipes/sloppy_joe.jpg', likeAmount: 14,categories: 'Meat', user:1};
        //
        // recipeService.createRecipes(recipe1);
    }
    angular.module('recipesApp').controller('categoryRecipesCtrl', ['$scope', 'recipeService','$location', '$routeParams',  categoryRecipesCtrl])
})();