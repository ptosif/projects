myappController.controller('fileuploadController', ['$scope',
    function($scope){
	$scope.files = [];

	$scope.fileSelectionHandler = function (files) {
		for (var i = 0; i < files.length; i++) $scope.files.push(files[i]);
	};
}]);