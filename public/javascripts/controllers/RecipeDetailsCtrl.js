
(function(){
    "use strict";
    function recipeDetailsCtrl($scope, recipeDetailsService){

        // var recipeId = $routeParams.id;

        // $scope.recipeDetails = recipeDetailsService.getRecipe(recipeId);
        $scope.recipeDetails = {
            userName: 'yardenD', title: "Sloppy Joe",
            content: 'In a medium skillet over medium heat, brown the ground beef, onion, and green pepper; drain off liquids. Stir in the garlic powder, mustard, ketchup, and brown sugar; mix thoroughly. Reduce heat, and simmer for 30 minutes. Season with salt and pepper.',
            image: '../images/recipes/sloppy_joe.jpg', likes: 14
        };

    }
    angular.module('recipesApp').controller('recipeDetailsCtrl', ['$scope', 'recipeDetailsService',  recipeDetailsCtrl])
})();