// service starts here
(function() {
    'use strict';
    angular
        .module('EmpApp')
        .service('empDataService', employeeDataService);
    // function for service starts here
    function employeeDataService($uibModal) {
        var ser = {};
        ser.employeeDetailArray = [];
        ser.editableValues = {};

        ser.employeeDetailObj = {};
        // a getdata is created to store the datas from the input models
        ser.getData = function(data) {
            ser.employeeDetailObj = data;
            // console.log(data.id)
             var overRiteFlag = false;
            for (var i = 0; i < ser.employeeDetailArray.length; i++) {
                if (data.id == ser.employeeDetailArray[i].id) {
                    overRiteFlag = true;
                }
            }
            if (overRiteFlag) {
                for (var i = 0; i < ser.employeeDetailArray.length; i++) {
                    if (data.id == ser.employeeDetailArray[i].id) {

                        var modalInstance = $uibModal.open({

                        templateUrl: 'templates/alertModal.html',
                        controller: 'ModalInstanceCtrl',
                        controllerAs: 'ctrl',
                       

                    });

                    }
                }
            }
            else {
             ser.newobject = {};
             ser.newobject = data;
             ser.employeeDetailArray.push(ser.newobject);
             console.log(ser.newobject);
             // console.log(vm.Details);
         }

            // console.log(ser.employeeDetailObj);

            console.log(ser.employeeDetailArray);
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
