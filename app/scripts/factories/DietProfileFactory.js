angular.module('happyBellyApp')
  .factory('DietProfileFactory', [function() {
    return function DietProfile(userId, ingredients) {
      this.user_id = userId;
      this.ingredients = ingredients;
    };
}]);
