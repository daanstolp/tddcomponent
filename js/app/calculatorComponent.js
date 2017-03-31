(function () {

    'use strict';

    angular.module('tddcomponent')
           .component('calculator', {
                bindings: {},
                templateUrl: 'js/app/calculatorComponent.html',
                controller: function(calculatorService) {
                    var ref = this;
                    
                    ref.n1 = 0;
                    ref.n2 = 0;
                    ref.result = 0;

                    ref.performCalculation = performCalculation;

                    function performCalculation() {
                        calculatorService.add(ref.n1, ref.n2)
                            .then(function(sum) {
                                ref.result = sum;
                            });
                    }
                }
           });

}());
