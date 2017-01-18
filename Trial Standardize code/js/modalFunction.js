// ui-modal js starts here
(function() {
    'use strict';
    // controller is initiallized includes, json service, and employee service
    angular.module('EmpApp')
        .controller('ModalInstanceCtrl', function($uibModalInstance, jsonService, empDataService) {
            // initialise the controller as obj
            var ctrl = {};
            ctrl.details = {};
            ctrl.viewData3 = {};
            ctrl.tableShow = {};
            ctrl.tableShow.flag = false;
            ctrl.employeeDetailViewArray = [];
            // ctrl.viewData={};
            ctrl.showMe = true;
            ctrl.show = false;

            // functuionality starts here...
            // service is called for storing the data
            ctrl.next = function() {
                empDataService.getData(ctrl.details);
                console.log(ctrl.details);
                ctrl.showMe = false;
                ctrl.show = true;

               // ctrl.viewData=empDataService.singleData();
                // service is set to show data
                 ctrl.viewData = empDataService.setData();

                console.log(ctrl.viewData);

            };
            // previous button to lead to the previous page
            ctrl.previous = function() {
                    ctrl.showMe = true;
                    ctrl.show = false;
                    // ctrl.save = false;

                }
                // cancel button to dismmiss the modal pop up
            ctrl.cancel = function() {
                $uibModalInstance.dismiss('cancel');
            };
            // ok button will show the data in the modal and get the data from service
            ctrl.ok = function() {

                ctrl.tableShow = true;
                ctrl.viewData2 = empDataService.setData();

                $uibModalInstance.dismiss('cancel');

            };

            // these json data is retreived from the json service for domain
            ctrl.myDomainResult = {};
            jsonService.domainService(function(dataResponse) {
                ctrl.myDomainResult = dataResponse;
                console.log(ctrl.myDomainResult);

            });
            // these jsons are retrieved from the json service for expereince
            ctrl.myExperienceResult = {};
            jsonService.experienceService(function(dataResponse) {
                ctrl.myExperienceResult = dataResponse;

            });

            // to select the domain from the dropdown
            ctrl.selectDomain = function(data) {
                ctrl.data = data;
            };

            // edit functionality in modal starts here...
            // service is called to get data from empservice
            // check whether the condition is for edit or add?
            // if false i.e, edit functionality goes on
            ctrl.viewDataEdit = empDataService.setEditData();
            ctrl.newFlag = (ctrl.viewDataEdit.editflag == undefined) ? true : false;
            if (ctrl.viewDataEdit.editflag == false) {
                ctrl.details = ctrl.viewDataEdit.data;
                //console.log(ctrl.viewDataEdit//.data);
                console.log(ctrl.details);
            }
            // save functionality starts here which collects the whole edited data
            ctrl.save = function(index) {
                ctrl.viewData2 = ctrl.details;
                $uibModalInstance.dismiss('cancel');

            }


            return ctrl;
        });
})();
