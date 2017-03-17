describe('CalculatorService', function () {

    var $rootScope,
        calculatorService;

    beforeEach(module('tddcomponent'));
    beforeEach(inject(function (_calculatorService_, _$rootScope_) {
        $rootScope = _$rootScope_;
        calculatorService = _calculatorService_;
    }));

    it('should exist', function () {
        expect(calculatorService).toBeDefined();
    });

    it('should return the result of an addition as a promise', function () {
        calculatorService.add(1, 2).then(function (result) {
            expect(result).toBe(3);
        });
        $rootScope.$apply();
    });

    it('should handle negative numbers correctly', function () {
        calculatorService.add(-3, 2).then(function (result) {
            expect(result).toBe(-1);
        });
        $rootScope.$apply();
    });

});