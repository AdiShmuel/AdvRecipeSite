
angular.module('recipesApp').factory('categoriesService', function ($http) {

    return {
        get: function(key) { // get by id 
            return $http.get('/api/dataservice/GetCategory/' + key).then(function (response) {
               return response.data[0]; // TODO - why et array ... name is uniqe
            });
        },
        set: function(key, value) { // set by id
            if (key == undefined)
                $http.post('/api/dataservice/CreateCategory',value);
            else
                $http.post('/api/dataservice/CreateCategory',value);

            // sessionStorage.setItem(key, JSON.stringify(value));
        },
        remove: function(key) { // remove by id
            $http.delete('/api/dataservice/DeleteCategory/' + key);
        },
        getAll: function () {
            return $http.get('/api/dataservice/GetAllCategories').then(function (response) {
                return response.data;
            });
        }
    };
});

//
// (function(){
//     "use strict";
//     function categoriesService($http){
//         this.getAll = function(){
//             return $http.get('/api/dataservice/GetAllCategories');
//         };
//
//     }
//
//     angular.module('recipesApp').service('categoriesService', ['$http', categoriesService]);
// })();
