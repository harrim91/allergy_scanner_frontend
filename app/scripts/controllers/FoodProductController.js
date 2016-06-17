angular.module('happyBellyApp')
  .controller('FoodProductController', [function(){
    var self = this;
    self.getProductInfo = getProductInfo;


    function getProductInfo(barcode) {
        self.foodProduct = 'food';
    }
  }]);
