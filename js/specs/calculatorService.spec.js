describe('CalculatorService', function() {

    var calculatorService;

    beforeEach(module('tddcomponent'));
    beforeEach(inject(function (_calculatorService_) {
        calculatorService = _calculatorService_;
    }));

    it('should exist', function() {
        expect(calculatorService).toBeDefined();
    });

});