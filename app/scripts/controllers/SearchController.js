angular.module('happyBellyApp')
  .controller('SearchController', function($scope, FoodProductService, UserProfileService, $state, $cordovaBarcodeScanner){

    var self = this;
    var API_URL = 'http://world.openfoodfacts.org/api/v0/product/';

    self.getProductInfo = getProductInfo;

    function getProductInfo(barcode) {
      FoodProductService.getProductInfo(API_URL, barcode).then(function() {
        // self.foodProductInfo = response;
        _redirectToProductInfo();
      });
    }


    $scope.scanBarcode = function(){
      $cordovaBarcodeScanner.scan().then(function(imageData){
      self.getProductInfo(imageData.text);
    }, function(error){
     alert('an error has occured ' + error);
   });
 };

    function _redirectToProductInfo() {
      $state.go('product-info');
    }

  });
