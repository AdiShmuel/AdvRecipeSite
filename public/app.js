(function(){
    var recipesApp = angular.module('recipesApp', ['ngRoute', 'ui.grid']);
    recipesApp.config(function($routeProvider,$locationProvider){

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
      // $locationProvider.html5Mode(true).hashPrefix('!');
        $routeProvider
            .when('/',{
                templateUrl:'views/home.html'
            })
            .when('/usersManager',{
                controller: 'usersManagerGridCtrl',
                templateUrl:'views/usersManager.html'
            })
            .when('/userRecipes',{
                controller: 'userRecipesGraphCtrl',
                templateUrl:'views/userRecipesGraph.html'
            })
            .when('/categoryRecipes',{
                controller: 'categoryRecipesPieCtrl',
                templateUrl:'views/categoryRecipesPie.html'
            })
            // .when('/messagesForDisplays', {
            //     templateUrl: 'views/messagesForDisplaysGrid.html',
            //     controller: 'messagesForDisplaysGridCtrl',
            //     resolve:{
            //         messageDisplayRelations: function(messageService){
            //             return messageService.getAllMessageDisplayRelations();
            //         }
            //     }
            // })
            // .when('/message/:id',{
            //     templateUrl: 'views/message.html',
            //     controller: 'messageForEditCtrl',
            //     controllerAs:'messageEditor'
            // })
            // .when('/newMessageDisplayRelation',{
            //     templateUrl: 'views/newMessageDisplayRelation.html',
            //     controller: 'newMessageDisplayRelationCtrl',
            //     resolve:{
            //         messages: function(messageService){
            //             return messageService.getAll();
            //         },
            //         stations: function(stationService){
            //             return stationService.getAll();
            //         }
            //     }
            // })
            // .when('/displayStations',{
            //     templateUrl: 'views/displayStationsManagement.html',
            //     controller: 'displayStationsManagementCtrl'
            // })
            //
            .otherwise({
                templateUrl:'views/home.html'
            });
    })
    })();





