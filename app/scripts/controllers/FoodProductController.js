angular.module('happyBellyApp')
  .controller('FoodProductController', ['FoodProductService', '$state', function(FoodProductService, $state){
    var self = this;
    API_URL = 'http://world.openfoodfacts.org/api/v0/product/'
    self.getProductInfo = getProductInfo;

    function getProductInfo(barcode) {
      self.foodProductInfo
      console.log(FoodProductService.getProductInfo(API_URL, barcode));
      console.log(self.foodProductInfo);
      _redirectToProductInfo();
    }

    function _redirectToProductInfo() {
      $state.go('product-info');
    }

  }]);
