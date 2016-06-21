describe('DietProfileFactory', function() {
  beforeEach(module('happyBellyApp'));

  var DietProfileFactory, foodProduct, brand, products, ingredients;
  beforeEach(inject(function(_DietProfileFactory_){
    DietProfileFactory = _DietProfileFactory_;
  }));

  describe('::new', function() {
    beforeEach(function() {
      ingredients = ['Rice Noodles', 'Seasoning'];
    });


    it('should create a diet profile with ingredients', function() {
      foodProduct = new DietProfileFactory(ingredients);
      expect(foodProduct.ingredients).toEqual(ingredients);
    });
  });
});
