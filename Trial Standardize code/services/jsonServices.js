(function() {
    'use strict';
    angular
    	.module('EmpApp')
    	.service('jsonService',jsonServices);

    	function jsonServices($http){
    		this.domainService=function(callbackFunc) {
        $http.get('Jsons/domain.json').success(function(data) {
            // console.log(data)
            callbackFunc(data);

        }).error(function() {
            // console.log("error");
        });
    }

    	
    	this.experienceService=function(callbackFunc) {
        $http.get('Jsons/experience.json').success(function(data) {
            // console.log(data)
            callbackFunc(data);

        }).error(function() {
            // console.log("error");
        });
    }

    	}

})();