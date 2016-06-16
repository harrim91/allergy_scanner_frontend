describe('FoodProductController', function() {

  // function mockFoodProductServiceGetProductInfo(productInfo) {
  //   module(function ($provide) {
  //     var foodProductService = { getProductInfo: null };
  //     spyOn(foodProductService, 'getProductInfo')
  //       .and.returnValue({
  //         then: function(resolve) {
  //           resolve(productInfo);
  //         }
  //       });

  //       $provide.value('FoodProductService', foodProductService);
  //   });
  // };

  describe('initialization', function() {
    it('is initialized with no food product', function() {
      var foodProductController;

      module('happyBellyApp')

      // mockFoodProductServiceGetProductInfo('food');

      inject(function($controller) {
        foodProductController = $controller('FoodProductController');
      });

      expect(foodProductController.foodProduct).not.toBeDefined();
    });

  });


  // describe('#getProductInfo', function() {
  //   it('sets the foodProduct attribute', function() {
  //     controller.getProductInfo(1234);
  //     expect(controller.foodProduct).toEqual('food');
  //   });
  //   it('calls the service', function() {
  //     controller.getProductInfo(1234);
  //     expect(service.getProductInfo).toHaveBeenCalled();
  //   });
  // });
});
