(function(){
    "use strict";
    function userService($http){
        this.getAll = function(){
            return $http.get('/api/dataservice/GetAppUsers');
        };
        this.getAllRecipies = function () {
          return $http.get('/api/dataservice/GetAppUsersRecipes');  
        };

        this.removeUser = function (userMail) {
            alert(userMail);
            return $http.delete('/api/dataservice/DeleteAppUser/' + userMail);
        }

        this.updateUser = function (user) {
            return $http.put('/api/dataservice/EditAppUser', user);
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