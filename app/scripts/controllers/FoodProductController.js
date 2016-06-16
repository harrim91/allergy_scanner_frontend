angular.module('happyBellyApp')
  .controller('FoodProductController', ['$state', function($state){
    var self = this;
    self.getProductInfo = getProductInfo;

    function getProductInfo(barcode) {
        self.foodProductInfo = {
                                brand: 'Thai Kitchen',
                                product: 'Stir-Fry Rice Noodles',
                                ingredients: ['Rice Noodles', 'Seasoning']
                              };
        debugger
        _redirectToProductInfo();
    }

    function _redirectToProductInfo() {
      $state.go('product-info');
    }

  }]);
