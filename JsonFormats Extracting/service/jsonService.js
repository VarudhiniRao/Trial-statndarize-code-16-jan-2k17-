(function() {
    'use strict';
    angular
        .module('jsonApp')
        .service('jsonService', function($http) {
            this.getJSonData = function(callbackFunc) {
                $http.get('jsons/realJson.json').success(function(data) {
                     // console.log(data)
                    callbackFunc(data);

                }).error(function() {
                    // console.log("error");
                });
            }
        });
})();
