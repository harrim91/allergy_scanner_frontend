angular.module('happyBellyApp')
  .controller('FoodProductController', function($scope, FoodProductService, UserProfileService, $state, $cordovaBarcodeScanner){

    var self = this;
    self.compareIngredients = compareIngredients;
    self.foodProductInfo = FoodProductService.foodProductInfo;

    function compareIngredients(user, product) {
      var result = [];
      for(var ingredient in user) {
          if(product.indexOf(user[ingredient]) > -1){
              result.push(user[ingredient]);
          }
      }
      return result.length === 0;
    }

    self.canIEatThis = compareIngredients(UserProfileService.userIngredients, self.foodProductInfo.ingredients);

  });
