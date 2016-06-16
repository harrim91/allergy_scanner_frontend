angular.module('happyBellyApp')
  .service('FoodProductService', ['$http', 'FoodProductFactory', function($http, FoodProductFactory){

    var self = this;

    self.getProductInfo = function(apiUrl, barcode) {
      var formattedUrl = _formatUrl(apiUrl, barcode);
      return $http.get(formattedUrl)
        .then(function(response) {
          _handleResponse(response);
        });
    };

    function _formatUrl(url, parameter) {
      return url + parameter + '.json';
    };

    function _handleResponse(response) {
      var ingredients = _listIngredients(response);
      response.product.map(function(foodProduct) {
        return new FoodProductFactory(foodProduct.brands, foodProduct.product_name, ingredients);
      });
    };

    function _listIngredients(response) {
      var ingredients = [];
      response.product.ingredients.forEach(function(ingredient) {
        ingredients.push(ingredient.text);
      });
      return ingredients;
    };

  }]);
