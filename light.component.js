"use strict"

const light = {
	
	template:`
	
		<section>LIGHT</section>
		<litch method = "$ctrl.onFlip()" on = "$ctrl.isOn" clip = "$ctrl.swich"></litch>
	
	`,
	
	controller: ["$rootScope", function($rootScope){
		
		const vm = this;
		vm.isOn = false;
		vm.swich = "turn on";
		
		vm.onFlip = function(){
			
			if(vm.isOn){
				vm.swich = "turn on";
			}else{
				vm.swich = "turn off";
			}
			
			vm.isOn = !vm.isOn;
			
		}
		
	}]
	
}

angular.module("LightApp").component("light", light);