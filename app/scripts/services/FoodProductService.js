angular.module('happyBellyApp')
  .service('FoodProductService', ['$http', 'FoodProductFactory', function($http, FoodProductFactory){

    var self = this;

    self.getProductInfo = function(apiUrl, barcode) {
      var formattedUrl = _formatUrl(apiUrl, barcode);
      var config = { headers: {
          'if-modified-since': undefined
        }
      };
      return _getDatafromApi(formattedUrl, config)
        .then(function(response) {
          _handleResponse(response.data.product);
        });
    };

    function _getDatafromApi(formattedUrl, config){
      return $http.get(formattedUrl, config);
    }

    function _formatUrl(url, parameter) {
      return url + parameter + '.json';
    }

    function _handleResponse(response) {
      var ingredients = _listIngredients(response);
      return new FoodProductFactory(response.brands, response.product_name, ingredients);
    }

    function _listIngredients(response) {
      var ingredients = [];
      response.ingredients.forEach(function(ingredient) {
        ingredients.push(ingredient.text);
      });
      return ingredients;
    }

  }]);
