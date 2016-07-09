(function(){
    "use strict";
    function userService($http){
        this.getAll = function(){
            return $http.get('/api/dataservice/GetAppUsers');
        };

        this.removeUser = function (userMail) {
            alert(userMail);
            return $http.delete('/api/dataservice/DeleteAppUser/' + userMail);
        }

    }

    angular.module('recipesApp').service('userService', ['$http', userService]);
})();
