(function() {
    'use strict';
    angular.module('EmpApp', ['ui.bootstrap']);
})();
(function() {
    'use strict';

    angular
        .module('EmpApp')
        .controller('EmpDataCtrl', function($uibModal, empDataService) {
            var dctrl = {};


            dctrl.animationsEnabled = true;
            // dctrl.tableShow={};
            // dctrl.tableShow.flag = false;
            dctrl.tableShow = true;


            dctrl.open = function(size) {
                var modalInstance = $uibModal.open({

                    templateUrl: 'templates/dataEntryModal.html',
                    controller: 'ModalInstanceCtrl',
                    controllerAs: 'ctrl',
                    size: size

                });
                 empDataService.editableValues={};


            };

            dctrl.viewData2 = empDataService.employeeDetailArray;
            // dctrl.tableShow.flag = empDataService.tableView();



            dctrl.edit = function(size,index) {
               dctrl.flag=false;
                dctrl.myData = index;
                empDataService.editIndex(empDataService.employeeDetailArray[index],dctrl.flag);
                dctrl.editDatas = empDataService.setEditData();
                console.log(dctrl.myData);

                var modalInstance = $uibModal.open({

                    templateUrl: 'templates/dataEntryModal.html',
                    controller: 'ModalInstanceCtrl',
                    controllerAs: 'ctrl',
                    size: size

                });

            }

            dctrl.delete=function (index) {
                empDataService.employeeDetailArray.splice(index,1);

              
            }
            return dctrl;
        });
})();
