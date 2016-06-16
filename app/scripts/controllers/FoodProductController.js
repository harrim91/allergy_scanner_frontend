angular.module('happyBellyApp')
  .controller('FoodProductController', [function(){
    var self = this;
    self.getProductInfo = getProductInfo;
    self.signUpNav = signUpNav;


    function getProductInfo(barcode) {
        self.foodProduct = 'food';
    };

    function signUpNav() {
      console.log("sign up called")
        $state.go("sign_up")
    }

  }]);