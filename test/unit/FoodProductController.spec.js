describe('FoodProductController', function() {

  function mockFoodProductServiceGetProductInfo(productInfo) {
    module(function ($provide) {
      var foodProductService = { getProductInfo: null };
      spyOn(foodProductService, 'getProductInfo')
        .and.returnValue({
          then: function(resolve) {
            resolve(productInfo);
          }
        });

      $provide.value('FoodProductService', foodProductService);
    });
  };

  var foodProductController;

  beforeEach(module('happyBellyApp'));

  // beforeEach(mockFoodProductServiceGetProductInfo('food'));

  beforeEach(inject(function($controller) {
    foodProductController = $controller('FoodProductController');
  }));

  describe('initialization', function() {
    it('is initialized with no food product', function() {
      expect(foodProductController.foodProductInfo).not.toBeDefined();
    });

  });


  describe('#getProductInfo', function() {
    it('sets the foodProduct attribute', function() {
      foodProductController.getProductInfo(1234);
      expect(foodProductController.foodProductInfo)
        .toEqual({
                  brand: 'Thai Kitchen',
                  product: 'Stir-Fry Rice Noodles',
                  ingredients: ['Rice Noodles', 'Seasoning']
                });
    });
  });
});
