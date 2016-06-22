angular.module('happyBellyApp')
  .controller('SearchController', function($scope, FoodProductService, UserProfileService, $state, $cordovaBarcodeScanner){

    var self = this;
    var API_URL = 'http://world.openfoodfacts.org/api/v0/product/';

    $scope.getProductInfo = function(barcode) {
      FoodProductService.getProductInfo(API_URL, barcode).then(function() {
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
      $state.go('product_info');
    }

  });
