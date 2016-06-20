angular.module('happyBellyApp')
  .factory('UserProfileFactory', [function() {
    return function FoodProduct(brand, product, ingredients) {
      this.brand = brand;
      this.product = product;
      this.ingredients = ingredients;
    };
}])