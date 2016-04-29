myApp.directive("myEmployee", function () {
    return{
        template : 'Name : {{employee.name}} Address : {{employee.address}}'
    };
});

myApp.directive("myCustomer", function(){
	return {
		restrict: "E",
		templateUrl: "../view/home/my-customer.html"
	};
});

myApp.directive("basketballPlayer", function (){
	return {
		restrict: "AE",
		scope: {
			player: "=" 
		},
		templateUrl: "../view/home/bball-player-template.html"
	};
});

myApp.directive("myCustomers", function(){
	return{
		templateUrl: function(elem, attr){
			return '../view/home/customer-'+attr.type+'.html';
		}
	};
});