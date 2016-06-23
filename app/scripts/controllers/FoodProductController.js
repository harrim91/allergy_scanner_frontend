angular.module('happyBellyApp')
  .controller('FoodProductController', function($scope, FoodProductService, UserProfileService, $state, $cordovaBarcodeScanner){

    var self = this;
    self.compareIngredients = compareIngredients;
    self.foodProductInfo = FoodProductService.foodProductInfo;

    function compareIngredients(user, product) {
      self.iCantEat = [];
      for(var ingredient in user) {
          if(product.indexOf(user[ingredient]) > -1){
              self.iCantEat.push(user[ingredient]);
          }
      }
      return self.iCantEat.length === 0;
    }

    self.canIEatThis = compareIngredients(UserProfileService.userIngredients, self.foodProductInfo.ingredients);

  });
