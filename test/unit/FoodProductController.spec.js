describe('FoodProductController', function() {

  var controller, service;

  module(function($provide) {
    $provide.service('FoodProductService', function() {
      this.getProductInfo = jasmine.createSpy('getProductInfo').andCallFake(function(barcode) {
        return 'food';
      });
    });
  });

  beforeEach(module('happyBellyApp'));

  beforeEach(inject(function($controller, FoodProductService) {
    controller = $controller('FoodProductController');
    service = FoodProductService;
  }));

  it('is initialized with no food product', function() {
    expect(controller.foodProduct).not.toBeDefined();
  });

  describe('#getProductInfo', function() {
    spyOn(service, 'getProductInfo');
    it('sets the foodProduct attribute', function() {
      controller.getProductInfo(1234);
      expect(controller.foodProduct).toEqual('food');
    });
    it('calls the service', function() {
      controller.getProductInfo(1234);
      expect(service.getProductInfo).toHaveBeenCalled();
    });
  });
});
