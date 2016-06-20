describe('FoodProductController', function() {

  var foodProductController, scope;
  var mockFoodProductService = { getProductInfo: null };
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

  beforeEach(inject(function($controller, $rootScope) {
    spyOn(mockFoodProductService, 'getProductInfo')
      .and.returnValue({
        then: function(resolve) {
          resolve(foodProduct);
        }
    });
    scope = $rootScope.$new();
    foodProductController = $controller('FoodProductController', {
      '$scope': scope
    });
  }));

  describe('initialization', function() {
    it('is initialized with no food product', function() {
      expect(foodProductController.foodProductInfo).not.toBeDefined();
    });

  });

  describe('#getProductInfo', function() {
    it('sets the foodProduct attribute', function() {
      foodProductController.getProductInfo();
      expect(foodProductController.foodProductInfo).toEqual(foodProduct);
    });
  });
});
