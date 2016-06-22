angular.module('happyBellyApp')
  .controller('FoodProductController', function($scope, FoodProductService, $state, $cordovaBarcodeScanner){

    console.log("foodproductcontroller")
    var self = this;
    var API_URL = 'http://world.openfoodfacts.org/api/v0/product/';

    // self.getProductInfo = getProductInfo;

    $scope.getProductInfo = function(barcode) {
      console.log("search barcode");
      FoodProductService.getProductInfo(API_URL, barcode).then(function(response) {
        self.foodProductInfo = response;
        console.log(self.foodProductInfo);
        _redirectToProductInfo();
      });
    }

    $scope.scanBarcode = function(){
      $cordovaBarcodeScanner.scan().then(function(imageData){
      self.getProductInfo(imageData.text);
    }, function(error){
     console.log('an error has occured ' + error);
   });
 };

    function _redirectToProductInfo() {
      $state.go('product_info');
    }

  });
