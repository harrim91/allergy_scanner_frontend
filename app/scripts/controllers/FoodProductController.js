angular.module('happyBellyApp')
  .controller('FoodProductController', function($scope, FoodProductService, UserProfileService, $state, $cordovaBarcodeScanner){

    var self = this;
    self.compareIngredients = compareIngredients

    self.foodProductInfo = FoodProductService.foodProductInfo;
    // console.log(UserProfileService.userIngredients);
    // console.log(self.foodProductInfo.ingredients);


    function compareIngredients(product, user) {
      var result = [];
      for(var i in product) {
          if(user.indexOf( product[i] ) > -1){
              result.push( product[i] );
          }
      }
      return result.length === 0;
    }

    console.log(self.compareIngredients(self.foodProductInfo.ingredients, UserProfileService.userIngredients));

  });
