angular.module('happyBellyApp')
  .factory('DietProfileFactory', [function() {
    return function DietProfile(ingredients) {
      this.ingredients = ingredients;
    };
}]);
