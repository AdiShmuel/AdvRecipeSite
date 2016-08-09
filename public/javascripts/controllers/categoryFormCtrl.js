
(function(){
    "use strict";
    function categoryFormCtrl($scope, categoriesService, $location, $routeParams){//}, uiGridConstants, $filter){
        $scope.uploadInProgress = false;
        if ($routeParams.name == undefined)
            $scope.formData = {};
        else
            categoriesService.get($routeParams.name).then(function (data) {
                $scope.formData = data;
            });

        $scope.setFile = function(element) {
            $scope.currentFile = element.files[0];
            $scope.formData.image = $scope.currentFile.name;
            var reader = new FileReader();

            reader.onload = function(event) {
                $scope.image_source = event.target.result
                $scope.$apply()

            }
            // when the file is read it triggers the onload event above.
            reader.readAsDataURL(element.files[0]);
        }

        $scope.submit = function() {
            var fileData = new FormData();
            fileData.append('file', $scope.currentFile );
            categoriesService.saveData(fileData,$scope.formData);
            $location.path('/categories');
        };
    }
    angular.module('recipesApp').controller('categoryFormCtrl', ['$scope', 'categoriesService','$location', '$routeParams',  categoryFormCtrl])
})();
