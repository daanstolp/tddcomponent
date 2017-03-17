(function() {

    'use strict';

    angular.module('tddcomponent')
           .service('calculatorService', calculatorService);

    function calculatorService($q) {
        this.add = function(n1, n2) {
            return $q.when(n1 + n2);
        };
    }

})();