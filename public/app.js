(function(){
    var recipesApp = angular.module('recipesApp', ['ngRoute','ngTouch', 'ui.grid', 'ui.grid.selection']);
    recipesApp.config(function($routeProvider,$locationProvider){

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
      // $locationProvider.html5Mode(true).hashPrefix('!');
        $routeProvider
            .when('/',{
                controller: 'usersManagerGridCtrl',
                templateUrl:'views/home.html'
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
            .when('/usersManager',{
                controller: 'usersGridCtrl',
                templateUrl:'views/usersManager.html',
                resolve:{
                    allUsers: function (userService) {
                        return userService.getAll();
                    }
                }
            })
            .when('/users/:email/recipes', {
                controller: 'viewRecipesCtrl',
                templateUrl: '/views/recipes.html'
            })
            .when('/categories/:categoryId/recipes', {
                controller: 'viewRecipesCtrl',
                templateUrl: '/views/recipes.html'
            })
            .when('/recipes', {
                controller: 'viewRecipesCtrl',
                templateUrl: '/views/recipes.html'
            })
            .when('/createRecipe', {
                controller: 'createRecipeCtrl',
                templateUrl: '/views/createRecipe.html'
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
            .when('/recipeDetails/:recipeId',{
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
            .when('/addIngredients',{
                controller: 'addIngredientsCtrl',
                templateUrl:'views/addIngredients.html'
            })
            .when('/myIngredients',{
                controller: 'myIngredientsCtrl',
                templateUrl:'views/myIngredients.html'
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





