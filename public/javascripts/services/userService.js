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

        this.getUser = function (userMail, userPassword) {
            alert(userMail, userPassword);
            var user = {'email': userMail , 'password': userPassword};
            return $http.get('/api/dataservice/GetAppUser/' + userMail + "/" + userPassword);// , {params: user,
                // headers : {'Accept' : 'application/json'}});
        }


    }

    angular.module('recipesApp').service('userService', ['$http', userService]);
})();