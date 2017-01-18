(function() {
    'use strict';
    angular.module('EmpApp', ['ui.bootstrap']);
})();
// module starts here...
(function() {
    'use strict';
    // a employeeDataCtrl controller to initiates the another controller for modalpop-up
    // injects the ui-modal dependency and service
    angular
        .module('EmpApp')
        .controller('EmpDataCtrl', function($uibModal, empDataService) {
            var dctrl = {};

            dctrl.animationsEnabled = true;

            dctrl.tableShow = true;

            // opens the modal
            dctrl.open = function(size) {
                var modalInstance = $uibModal.open({

                    templateUrl: 'templates/dataEntryModal.html',
                    controller: 'ModalInstanceCtrl',
                    controllerAs: 'ctrl',
                    size: size

                });
                // this will make the object empty when the modal open for adding data
                empDataService.editableValues = {};

            };
            // stores the data from service for displaying it in a table
            dctrl.viewData2 = empDataService.setData();

            // edit function strarts here...
            // index of a particular data is been sent to the object along with a flag
            dctrl.edit = function(size, index) {
                    dctrl.flag = false;
                    dctrl.myData = index;
                    empDataService.editIndex(empDataService.employeeDetailArray[index], dctrl.flag);
                    dctrl.editDatas = empDataService.setEditData();
                    console.log(dctrl.myData);

                    // this modal will initiate when the edit button active
                    var modalInstance = $uibModal.open({

                        templateUrl: 'templates/dataEntryModal.html',
                        controller: 'ModalInstanceCtrl',
                        controllerAs: 'ctrl',
                        size: size

                    });

                }
                // edit functionality ends here....
                // delete functonality starts here..
                // the object is taken from the service and stored and thn spliced..
            dctrl.delete = function(index) {
                dctrl.deleteArray = empDataService.setData();
                dctrl.deleteArray.splice(index, 1);

            }
            return dctrl;
        });
    // delete functionality ends here
})();
