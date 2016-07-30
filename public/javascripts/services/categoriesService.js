(function(){
    "use strict";
    function categoriesService($http){
        this.getAll = function(){
            return $http.get('/api/dataservice/GetAllCategories');
        };

    }

    angular.module('recipesApp').service('categoriesService', ['$http', categoriesService]);
})();
