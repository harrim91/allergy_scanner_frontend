describe('ProfileFactory', function() {
  beforeEach(module('happyBellyApp'));

  var ProfileFactory, foodProduct, brand, products, ingredients;
  beforeEach(inject(function(_ProfileFactory_){
    ProfileFactory = _ProfileFactory_;
  }));

  describe('::new', function() {
    beforeEach(function() {
      userId = 1;
      ingredients = ['Rice Noodles', 'Seasoning'];
    });

    it('should create a diet profile with a user id', function() {
      dietProfile = new ProfileFactory(userId, ingredients);
      expect(dietProfile.user_id).toEqual(userId);
    });

    it('should create a diet profile with ingredients', function() {
      foodProduct = new ProfileFactory(userId, ingredients);
      expect(foodProduct.ingredients).toEqual(ingredients);
    });
  });
});
