(function(){
    "use strict";
    function userService($http){
        this.getAll = function(){
            return $http.get('/api/dataservice/AppUsers');
        };
        this.getAllRecipies = function () {
          return $http.get('/api/dataservice/GetAppUsersRecipes');  
        };
    }

    angular.module('recipesApp').service('userService', ['$http', userService]);
})();