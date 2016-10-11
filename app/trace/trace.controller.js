'use strict';

(function() {

	angular
	.module('app.trace')
	.controller('TraceController', TraceController);

	TraceController.$inject = ['tracePrepData'];

	function TraceController(tracePrepData) {
		var vm = this;

		vm.traces = tracePrepData.data;

		vm.colorFromStatus = colorFromStatus;
		vm.filtrer = filtrer;

		function colorFromStatus(status) {
            if (status >= 500) {
                return 'status5xx';
            } else if (status >= 400) {
                return 'status4xx';
            } else {
                return 'status2xx';
            }
        }

		function filtrer() {
			return function(trace) {
				if (!vm.filterValue) {
					return true;
				}
				return trace.info.method.indexOf(vm.filterValue) !== -1 || trace.info.path.indexOf(vm.filterValue) !== 1;
			}
		}
	}
})();