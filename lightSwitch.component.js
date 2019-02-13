"use strict"

const litch = {
	
	bindings: {
		
		method: "&",
		on: "<",
		clip: "<"
		
	},
	
	template: `
	
		<button ng-class = "{ On : $ctrl.on }" ng-click = "$ctrl.method();">{{$ctrl.clip}}</button>
	
	`,
	
	controller: ["$rootScope", function($rootScope){
		
		const vm = this;
		
	}]
	
}

angular.module("LightApp").component("litch", litch);