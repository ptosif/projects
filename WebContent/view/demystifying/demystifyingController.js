myappController.controller('demystifyingController', ['$scope', '$window',
    function($scope,$window){
	$scope.title = "So you wanna learn Directive using angularjs";
	
	$scope.friends = [
	                  {
	                	  id:1,
	                	  firstname:'Tosif',
	                	  lastname:'Pathan',
	                	  age:27,
	                	  tweets:[
	                	    {id:1,text:'xyz'},
	                	    {id:1,text:'abc'},
	                	    {id:1,text:'def'}
	                	  ]
	                  },
	                  {
	                	  id:2,
	                	  firstname:'Sohal',
	                	  lastname:'Amin',
	                	  age:27,
	                	  tweets:[
	                	    {id:1,text:'abc'},
	                	    {id:1,text:'xyz'},
	                	    {id:1,text:'asd'}
	                     ]
	                  }
	                 ];
}]);