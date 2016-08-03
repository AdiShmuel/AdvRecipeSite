/**
 * Created by Yarden on 8/2/2016.
 */


angular.module('recipesApp').factory('recipeService', function ($http) {

    return {
        getAllByCategory: function(key) { // get by id
            return $http.get('/api/dataservice/GetRecipesByCategory/'+ key).then(function (response) {
                return response.data;
            });
        },
        createRecipes: function (value) {
            $http.post('/api/dataservice/CreateRecipe',value); 
        },
        like: function (data) {
            return $http.put('/api/dataservice/LikeRecipe',data).then(function (response) {
                return response.data.status;
            });
        }
    };
});




