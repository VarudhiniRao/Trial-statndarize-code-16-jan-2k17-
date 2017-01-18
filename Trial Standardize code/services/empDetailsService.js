// service starts here
(function() {
    'use strict';
    angular
        .module('EmpApp')
        .service('empDataService', employeeDataService);
    // function for service starts here
    function employeeDataService() {
        var ser = {};
        ser.employeeDetailArray = [];
        ser.editableValues = {};

        ser.employeeDetailObj = {};
        // a getdata is created to store the datas from the input models
        ser.getData = function(data) {
                ser.employeeDetailObj = data;
                // console.log(ser.employeeDetailObj);
                ser.employeeDetailArray.push(ser.employeeDetailObj);

                // console.log(ser.employeeDetailArray);
            }
            // a setData is created in order to store the data from the get DAta and to re use where ever requiredH
        ser.setData = function() {
                return ser.employeeDetailArray;
            }
            // edit Index is (get) created to store the commands from the controller
        ser.editableValues = {};
        ser.editIndex = function(data, flag) {
                ser.editableValues.data = data;
                ser.editableValues.editflag = flag;

                // console.log(ser.editflag);
                console.log(ser.editableValues);
            }
            // the values are set and stored here which returns the editable valeues
        ser.setEditData = function() {
            // console.log(ser.editableValues)

            return ser.editableValues;


        }


        return ser;

    };


})();
