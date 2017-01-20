(function() {
    'use strict';
    angular
        .module('jsonApp', [])
        .controller('getJsonCtrl', getJsonCtrll);

    function getJsonCtrll($scope, jsonService) {
        var vm = {};
        // vm.data = [];
        vm.res_obj_arr = [];


        vm.my_Data = {};
        jsonService.getJSonData(function(dataResponse) {
            vm.my_Data = dataResponse;
            console.log(vm.my_Data);
            var obj_key = Object.keys(vm.my_Data[0]);
            // key_value takes the keyname in an object iteration
            angular.forEach(obj_key, function(key_value, key) {
                console.log(key_value, key);
                if (key_value != 'resource_id') {
                    var res_obj = {
                        "key": "",
                        "value": []
                    };
                    // storing a key values from objects
                    res_obj['key'] = key_value;
                    // foreach loop for taking values from the object
                    angular.forEach(vm.my_Data, function(m_value, key) {
                        // creating a object with key names x and y
                        var val_obj = {
                            'x': '',
                            'y': ''
                        };
                        // stores the values from key name`s value into obj[x] and [y]
                        val_obj['x'] = m_value['resource_id'];
                        val_obj['y'] = m_value[key_value];
                        // finally pushing the object into array of value
                        res_obj['value'].push(val_obj);


                    });
                    // pushing the array object into main array
                    vm.res_obj_arr.push(res_obj);


                }
                // creating a new res obj with a key and array of value


            });
            console.log('res_obj_arr', vm.res_obj_arr);
        });
    };
})();
