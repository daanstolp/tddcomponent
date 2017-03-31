describe('Calculator component', function() {

    var controller;
    var calculatorService;
    var scope;

    beforeEach(module('tddcomponent'));

    beforeEach(inject(function($componentController, _calculatorService_, $rootScope) {
        calculatorService = _calculatorService_;
        scope = $rootScope.$new();
        spyOn(calculatorService, 'add').and.callThrough();

        controller = $componentController('calculator', 
            {
                calculatorService: calculatorService,
                $scope: scope
            }, null);
    }));

    it('should exist', function() {
        expect(controller).toBeDefined();
    });

    it('should perform the calculation', function() {
        controller.n1 = 2;
        controller.n2 = 3;
        controller.performCalculation();

        expect(calculatorService.add).toHaveBeenCalledWith(2, 3);
    });

    it('should show the result of a calculation', function() {
        controller.n1 = 2;
        controller.n2 = 3;
        controller.performCalculation();

        scope.$apply();

        expect(controller.result).toBe(5);
    });

});




