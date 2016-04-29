myApp.directive('contactCard', function(){
	return{
		restrict: "E",
		scope: {
			friend: "=",
			title: "="
		},
		replace: true,
		link: function(scope,element,attrs){
			element.click(function(){
				//alert('Click');
			})
			//console.log("aa :"+arguments);
		},
		/*transclude: true,*/
		/*template: "<h1>{{friend.firstname}}</h1>",*/
		templateUrl: "view/demystifying/contactCard.html",
		controller: function($scope){
			console.log($scope.friend);
		}
	};
});