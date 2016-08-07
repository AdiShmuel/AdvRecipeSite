
(function(){
    "use strict";
    function createRecipeCtrl($scope, $location, recipeDetailsService, categoriesService){
        categoriesService.getAll().then(function (data) {
            if (!_.isEmpty(data) && !_.isEmpty(data.data)){
                $scope.categories = data.data;
            }
        });
        
        $scope.save = function () {
            var categories = [];
            for (var c = 0; c < $scope.categories.length; c++) {
                if ($scope.categories[c].selected) {
                    categories.push($scope.categories[c].id);
                }
            }
            
            var newRecipe = {
                user: $scope.$parent.currentUser.email,
                //image: $scope.image,
                //imageType: $scope.imageType,
                title: $scope.title,
                content: $scope.content,
                categories: categories,
                likeAmount: 0
            };
            
            recipeDetailsService.addRecipe(newRecipe).then(function (data) {
               $location.path('/user/' + $scope.$parent.currentUser.email + '/recipes'); 
            });
        }
    }
    angular.module('recipesApp').controller('createRecipeCtrl', ['$scope', '$location', 'recipeDetailsService', 'categoriesService',  createRecipeCtrl])
    .directive("fileread", [function () {
        return {
            scope: {
                fileread: "=",
                filetype: "="
            },
            link: function (scope, element, attributes) {
                element.bind("change", function (changeEvent) {
                    var reader = new FileReader();
                    reader.onload = function (loadEvent) {
                        scope.$apply(function () {
                            scope.fileread = loadEvent.target.result;
                            scope.filetype = changeEvent.target.files[0].type;
                        });
                    }
                    reader.readAsDataURL(changeEvent.target.files[0]);
                });
            }
        }
    }])
})();