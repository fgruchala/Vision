(function () { 
    'use strict';
    
    angular
    .module('app.health')
    .controller('HealthController', healthController);
    
    healthController.$inject = ['healthPrepData', '$mdDialog', '$translate'];
    
    function healthController (healthPrepData, $mdDialog, $translate) {
        var vm = this;
        
        vm.healthPrepData = healthPrepData;
        vm.percentOfUsedDiskSpace = percentOfUsedDiskSpace;
        vm.showError = showError;
        
        
        
        function percentOfUsedDiskSpace () {
            var percentOfUsedDiskSpace = 0;
            
            if(angular.isDefined(vm.healthPrepData.diskSpace)) {
                var usedDiskSpace = vm.healthPrepData.diskSpace.total - vm.healthPrepData.diskSpace.free;
                percentOfUsedDiskSpace = Math.round((usedDiskSpace/vm.healthPrepData.diskSpace.total)*100);
            }
            
            return percentOfUsedDiskSpace;
        }
        
        function showError (content) {
            if(angular.isDefined(content)) {
                $translate(['COMMON.TITLE-ERROR', 'COMMON.OK'])
                .then(function(translations) {
                    $mdDialog.show(
                        $mdDialog.alert()
                        .clickOutsideToClose(true)
                        .title(translations['COMMON.TITLE-ERROR'])
                        .textContent(content)
                        .ariaLabel('Error Dialog')
                        .ok(translations['COMMON.OK'])
                    );
                });
            }
        }
        
        
    }
    
})();