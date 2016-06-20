describe('ProfileFactory', function() {
  beforeEach(module('happyBellyApp'));

  var ProfileFactory, foodProduct, brand, products, ingredients;
  beforeEach(inject(function(_ProfileFactory_){
    ProfileFactory = _ProfileFactory_;
  }));

  describe('::new', function() {
    beforeEach(function() {
      brand = 'Thai Kitchen';
      product = 'Stir-Fry Rice Noodles';
      ingredients = ['Rice Noodles', 'Seasoning'];
    });

    it('should create a food product with a brand', function() {
      foodProduct = new ProfileFactory(brand, product, ingredients);
      expect(foodProduct.brand).toEqual(brand);
    });

    it('should create a food product with a product name', function() {
      foodProduct = new ProfileFactory(brand, product, ingredients);
      expect(foodProduct.product).toEqual(product);
    });

    it('should create a food product with a list of ingredients', function() {
      foodProduct = new ProfileFactory(brand, product, ingredients);
      expect(foodProduct.ingredients).toEqual(ingredients);
    });
  });
});
