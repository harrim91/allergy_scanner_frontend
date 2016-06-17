angular.module('happyBellyApp')
  .controller('FoodProductController', ['FoodProductService', '$state', function(FoodProductService, $state, $cordovaBarcodeScanner){

    var self = this;
    var API_URL = 'http://world.openfoodfacts.org/api/v0/product/';

    self.getProductInfo = getProductInfo;
    self.scanBarcode = scanBarcode;

    function getProductInfo(barcode) {
      FoodProductService.getProductInfo(API_URL, barcode).then(function(response) {
        self.foodProductInfo = response;
      });
      _redirectToProductInfo();
    }

    function scanBarcode() {
      document.addEventListener('deviceready', function(){
        $cordovaBarcodeScanner.scan().then(function(imageData){
          self.getProductInfo(imageData.format);
        }, function(error){
          console.log('an error has occured ' + error);
        });
      });
    }

    function _redirectToProductInfo() {
      $state.go('product-info');
    }

  }]);
