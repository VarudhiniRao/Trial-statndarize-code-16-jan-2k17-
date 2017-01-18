(function() {
    'use strict';
    angular
        .module('EmpApp')
        .service('empDataService', employeeDataService);

    function employeeDataService() {
        var ser = {};
        // ser.tableShow={};
        ser.employeeDetailArray = [];
        ser.editableValues={};

        ser.employeeDetailObj = {};
        ser.getData = function(data) {
                ser.employeeDetailObj = data;
                // console.log(ser.employeeDetailObj);
                ser.employeeDetailArray.push(ser.employeeDetailObj);
                
                // console.log(ser.employeeDetailArray);
            }

            ser.setData=function() {
            	return ser.employeeDetailArray;
            }
              ser.editableValues={};
             ser.editIndex=function(data,flag){
             	ser.editableValues.data=data;
             	ser.editableValues.editflag=flag;
             	
             	// console.log(ser.editflag);
             	 console.log(ser.editableValues);
             }
             ser.setEditData=function() {

            	return ser.editableValues;

            	
            	// console.log(ser.editableValues)
            }
            

        return ser;

    };


})();
