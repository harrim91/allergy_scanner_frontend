angular.module('happyBellyApp')
  .controller('FoodProductController', function($scope, FoodProductService, UserProfileService, $state, $cordovaBarcodeScanner){

    var self = this;

    self.foodProductInfo = FoodProductService.foodProductInfo;

    console.log(UserProfileService.userIngredients);
  });
