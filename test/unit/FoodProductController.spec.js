describe('FoodProductController', function() {

  var foodProductController;
  var mockFoodProductService = { getProductInfo: function() {} };
  var foodProduct = {
            brand: 'Thai Kitchen',
            product: 'Stir-Fry Rice Noodles',
            ingredients: ['Rice Noodles', 'Seasoning']
          };


  beforeEach(function() {
    module('happyBellyApp', function($provide) {
      $provide.value('FoodProductService', mockFoodProductService);
    });
  });

  beforeEach(inject(function($controller) {
    var promise = { then: function() { return foodProduct } };
    spyOn(mockFoodProductService, 'getProductInfo').and.returnValue(promise);
    foodProductController = $controller('FoodProductController');
    // promise.then.mostRecentCall.args[0](foodProduct);
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
