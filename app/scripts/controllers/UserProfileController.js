angular.module('happyBellyApp')
  .controller('UserProfileController', function(UserService, $scope, $auth, $state, $rootScope){
    var self = this;

    var USER_INGREDIENT_URL = 'http://happy-belly-api.herokuapp.com/users/'+ $rootScope.user.id +'/ingredients';


    self.getUserIngredients= function() {
      UserService.getUserIngredients(USER_INGREDIENT_URL).then(function(response) {
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
      return ingredients.map(function(x){
        return x.replace(/\w\S*/g, function(txt) {
          return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
      });
    };
    self.getUserIngredients();
  });
