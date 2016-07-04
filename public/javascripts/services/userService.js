(function(){
    "use strict";
    function userService($http){
        this.getAll = function(){
            return $http.get('/api/dataservice/AppUsers');
        };

    }

    angular.module('recipesApp').service('userService', ['$http', userService]);
})();