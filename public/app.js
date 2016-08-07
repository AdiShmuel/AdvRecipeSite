(function(){
    var recipesApp = angular.module('recipesApp',  ['ngRoute', 'ui.grid', 'ui.grid.edit']);
    recipesApp.config(function($routeProvider,$locationProvider){

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
      // $locationProvider.html5Mode(true).hashPrefix('!');
        $routeProvider
            .when('/',{
                controller: 'usersManagerGridCtrl',
                templateUrl:'/views/home.html'
            })
            .when('/login',{
             //   controller: 'usersManagerGridCtrl',
                templateUrl:'views/login.html'
            })
            .when('/register',{
                  controller: 'userManagerCtrl',
                templateUrl:'views/userDetails.html',
                resolve:{
                    isNew: function () {
                        return true;
                    }
                }
            })
            .when('/myProfile',{
                controller: 'userManagerCtrl',
                templateUrl:'views/userDetails.html',
                resolve:{
                    isNew: function () {
                        return false;
                    }
                }
            })
            .when('/usersManager',{
                controller: 'usersGridCtrl',
                templateUrl:'/views/usersManager.html',
                resolve:{
                    allUsers: function (userService) {
                        return userService.getAll();
                    }
                }
            })
            .when('/userRecipes',{
                controller: 'userRecipesGraphCtrl',
                templateUrl:'/views/userRecipesGraph.html'
            })
            .when('/categoryRecipes',{
                controller: 'categoryRecipesPieCtrl',
                templateUrl:'/views/categoryRecipesPie.html'
            })
            .when('/about',{
                // controller: 'usersManagerGridCtrl',
                templateUrl:'/views/about.html'
            })
            .when('/contact',{
                // controller: 'usersManagerGridCtrl',
                templateUrl:'/views/contact.html'
            })
            .when('/recipeDetails',{
                controller: 'recipeDetailsCtrl',
                templateUrl:'/views/recipeDetails.html'
            })
            .when('/categories',{
                controller: 'categoriesCtrl',
                templateUrl:'/views/categories.html'
            })
            .when('/createCategory',{
                controller: 'categoryFormCtrl',
                templateUrl:'/views/categories/categoryForm.html'
            })
            .when('/editCategory',{
                controller: 'categoryFormCtrl',
                templateUrl:'/views/categories/categoryForm.html'
            })
            .when('/editCategory/:name',{
                controller: 'categoryFormCtrl',
                templateUrl:'/views/categories/categoryForm.html'
            })
            .when('/removeCategory',{
                controller: 'categoryFormCtrl',
                templateUrl:'/views/categories.html'
            })
            .when('/categoryRecipes/:name',{
                controller: 'categoryRecipesCtrl',
                templateUrl:'/views/categoryRecipes.html'
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





