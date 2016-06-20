angular.module('happyBellyApp')
  .factory('ProfileFactory', [function() {
    return function Profile(userId, ingredients) {
      this.user_id = userId;
      this.ingredients = ingredients;
    };
}])
