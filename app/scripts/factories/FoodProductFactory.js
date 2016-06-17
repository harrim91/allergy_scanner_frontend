angular.module('happyBellyApp')
  .factory('FoodProductFactory', [function() {
    return function FoodProduct(brand, product, ingredients) {
      this.brand = brand;
      this.product = product;
      this.ingredients = ingredients;
    };
}])