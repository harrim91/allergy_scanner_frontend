angular.module('happyBellyApp')
  .controller('UserProfileController', function(UserProfileService, $scope, $auth, $state, $rootScope){
    var self = this;

    var USER_INGREDIENT_URL = 'http://happy-belly-api.herokuapp.com/users/'+ $rootScope.user.id +'/ingredients';


    self.getUserIngredients= function() {
      UserProfileService.getUserIngredients(USER_INGREDIENT_URL).then(function(response) {
        objToArray(response);
      });
    };

    function objToArray(objArray) {
      self.userIngredients = [];
      objArray.forEach(function(obj) {
        self.userIngredients.push(obj.name);
      })
    }

    self.formatIngredients = function(ingredients) {
      return ingredients.map(function(ingredient){
        return ingredient.replace(/\w\S*/g, function(word) {
          return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
        });
      });
    };
    self.getUserIngredients();
  });
