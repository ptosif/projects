'use strict';

myappController.controller('homeController', homeController);

function homeController($scope) { 
	
	$scope.employee = {
            name : "abc",
            address : "xyz"
        };
        
        $scope.customer = {
        	name: 'Naomi',
        	address: '1600 Amphitheatre'
        };
        
        $scope.basketballPlayer = {
        	name: 'Johnny Basketball',
        	number: '33',
        	position: 'Guard',
        	points: 0,
        	assists: 0
       };
}

/*myappController.controller('homeController', ['$scope', '$window',
    function ($scope, $window) {

        $scope.employee = {
            name : "abc",
            address : "xyz"
        };
        
        $scope.customer = {
        	name: 'Naomi',
        	address: '1600 Amphitheatre'
        };
        
        $scope.basketballPlayer = {
        	name: 'Johnny Basketball',
        	number: '33',
        	position: 'Guard',
        	points: 0,
        	assists: 0
       };
}]);*/

