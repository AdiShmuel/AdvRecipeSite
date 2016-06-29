var recipesApp = angular.module('recipesApp', ['ngRoute']);

recipesApp.config(function ($routeProvider) {
    $routeProvider
        .when('/',
            {
               // controller: 'SimpleController',
                templateUrl:'index.html'
            })
        // .when('/view2',
        //     {
        //         controller: 'SimpleController',
        //         templateUrl:'View2.html'
        //     })
        .otherwise({ redirectTo: '/' });
});
