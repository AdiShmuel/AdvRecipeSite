
(function(){
    "use strict";
    function categoryFormCtrl($scope, categoriesService, $location, $routeParams){//}, uiGridConstants, $filter){
        console.log("in form controller"); 
        if ($routeParams.name == undefined)
            $scope.formData = {};
        else
            categoriesService.get($routeParams.name).then(function (data) {
                $scope.formData = data;
            });
        //$scope.formData = $routeParams;
        //
        // $scope.onUploadSelect = function($files) {
        //     $scope.newResource.newUploadName = $files[0].name;
        // };
        
        
        
        $scope.submit = function() {
            $scope.formData.image = "../images/categories/" + $scope.formData.name + ".jpg";
            categoriesService.set($routeParams.name, $scope.formData);
            $location.path('/categories');
        };
    }
    angular.module('recipesApp').controller('categoryFormCtrl', ['$scope', 'categoriesService','$location', '$routeParams',  categoryFormCtrl])
})();
