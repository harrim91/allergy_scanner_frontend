angular.module('happyBellyApp')
  .controller('FoodProductController', function($scope, FoodProductService, $state, $cordovaBarcodeScanner){

    var self = this;
    var API_URL = 'http://world.openfoodfacts.org/api/v0/product/';

    self.getProductInfo = getProductInfo;
    // self.scanBarcode = scanBarcode;

    function getProductInfo(barcode) {
      FoodProductService.getProductInfo(API_URL, barcode).then(function(response) {
        self.foodProductInfo = response;
      });
      _redirectToProductInfo();
    }

    // self.scanBarcode = function() {
    //   console.log('Scan in progress');
    //   $cordovaBarcodeScanner.scan().then(function(imageData){
    //     self.getProductInfo(imageData.text);
    //   }, function(error){
    //     console.log('an error has occured ' + error);
    //   });
    // };

    $scope.scanBarcode = function(){
      $cordovaBarcodeScanner.scan().then(function(imageData){
      self.getProductInfo(imageData.text);
    }, function(error){
     console.log('an error has occured ' + error);
   });
 };

    function _redirectToProductInfo() {
      $state.go('product-info');
    }

  });
