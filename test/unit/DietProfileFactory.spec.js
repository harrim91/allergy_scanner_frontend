describe('DietProfileFactory', function() {
  beforeEach(module('happyBellyApp'));

  var DietProfileFactory, foodProduct, brand, products, ingredients;
  beforeEach(inject(function(_DietProfileFactory_){
    DietProfileFactory = _DietProfileFactory_;
  }));

  describe('::new', function() {
    beforeEach(function() {
      userId = 1;
      ingredients = ['Rice Noodles', 'Seasoning'];
    });

    it('should create a diet profile with a user id', function() {
      dietProfile = new DietProfileFactory(userId, ingredients);
      expect(dietProfile.user_id).toEqual(userId);
    });

    it('should create a diet profile with ingredients', function() {
      foodProduct = new DietProfileFactory(userId, ingredients);
      expect(foodProduct.ingredients).toEqual(ingredients);
    });
  });
});
