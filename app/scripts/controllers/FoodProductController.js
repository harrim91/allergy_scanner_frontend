angular.module('happyBellyApp')
  .controller('FoodProductController', ['FoodProductService', '$state', function(FoodProductService, $state){
    var self = this;
    API_URL = 'http://world.openfoodfacts.org/api/v0/product/'
    self.getProductInfo = getProductInfo;

    function getProductInfo(barcode) {
      FoodProductService.getProductInfo(API_URL, barcode)
        .then(function(foodProductInfo) {
          self.foodProductInfo = foodProductInfo
      })

      _redirectToProductInfo();
    }

    function _redirectToProductInfo() {
      $state.go('product-info');
    }

  }]);
