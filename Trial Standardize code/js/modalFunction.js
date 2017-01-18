(function() {
    'use strict';

    angular.module('EmpApp')
        .controller('ModalInstanceCtrl', function($uibModalInstance, jsonService, empDataService) {
            var ctrl = {};
            ctrl.details = {};
            ctrl.viewData3 = {};
            ctrl.tableShow = {};
            ctrl.tableShow.flag = false;
            ctrl.employeeDetailViewArray = [];
            // ctrl.viewData={};
            ctrl.showMe = true;
            ctrl.show = false;
            ctrl.save = false;

            ctrl.next = function() {
                empDataService.getData(ctrl.details);
                console.log(ctrl.details);
                ctrl.showMe = false;
                ctrl.show = true;
                ctrl.save = false;

                ctrl.viewData = empDataService.setData();
                console.log(ctrl.viewData);

            };
            ctrl.previous = function() {
                ctrl.showMe = true;
                ctrl.show = false;
                ctrl.save = false;
            }
            ctrl.cancel = function() {
                $uibModalInstance.dismiss('cancel');
            };
            ctrl.ok = function() {

                ctrl.tableShow = true;
                ctrl.viewData2 = empDataService.setData();

                $uibModalInstance.dismiss('cancel');

            };

            ctrl.edit = function(data) {

            }

            ctrl.myDomainResult = {};
            jsonService.domainService(function(dataResponse) {
                ctrl.myDomainResult = dataResponse;
                console.log(ctrl.myDomainResult);

            });

            ctrl.myExperienceResult = {};
            jsonService.experienceService(function(dataResponse) {
                ctrl.myExperienceResult = dataResponse;

            });


            ctrl.selectDomain = function(data) {
                ctrl.data = data;
            };


            ctrl.viewDataEdit = empDataService.setEditData();
            ctrl.newFlag = (ctrl.viewDataEdit.editflag == undefined) ? true : false;
            if (ctrl.viewDataEdit.editflag == false) {
                ctrl.details = ctrl.viewDataEdit.data;
                //console.log(ctrl.viewDataEdit//.data);
                console.log(ctrl.details);
            }
            ctrl.save = function(index) {
                ctrl.viewData2 = ctrl.details;
                 $uibModalInstance.dismiss('cancel');
                
            }


            return ctrl;
        }); 
})();
