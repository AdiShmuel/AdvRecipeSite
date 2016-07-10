(function () {
    "use strict";
    function recipeDetailsService($http) {
        // this.getRecipe = function (id) {
        //     return {
        //         userName: 'yardenD', title: "Sloppy Joe",
        //         content: 'In a medium skillet over medium heat, brown the ground beef, onion, and green pepper; drain off liquids. Stir in the garlic powder, mustard, ketchup, and brown sugar; mix thoroughly. Reduce heat, and simmer for 30 minutes. Season with salt and pepper.',
        //         image: '../images/recipes/sloppy_joe.jpp', likes: 14
        //     };
        //     // TODO - get from serve
        //     // return $http.get('/api/dataservice/GetRecipe/' + id);
        // };

    }

    angular.module('recipesApp').service('recipeDetailsService', ['$http', recipeDetailsService]);
})();
