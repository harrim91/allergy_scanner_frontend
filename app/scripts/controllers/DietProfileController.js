angular.module('happyBellyApp')
  .controller('DietProfileController', function(UserProfileService, DietProfileService, $scope, $state){

    var self = this;
    var DIET_PROFILE_URL = 'http://happy-belly-api.herokuapp.com/diet_profiles';
    var USER_INGREDIENT_URL = 'http://happy-belly-api.herokuapp.com/users/'+ UserProfileService.currentUserID +'/ingredients';

    var chosenIngredients = [];

    self.dietProfiles = getDietProfiles();

    $scope.selectedProfiles = {};

    function getDietProfiles() {
      DietProfileService.getDietProfiles(DIET_PROFILE_URL).then(function(response) {
        self.dietProfiles = response;
      });
    }

    self.cleanFalse = function(object) {
      Object.keys(object).filter(function(x) {
        if( object[x] !== false){chosenIngredients.push(object[x]); }
      });
      formatIngredients();
    };

    function formatIngredients () {
        var mergedIngredients = [].concat.apply([], chosenIngredients);
        DietProfileService.create(USER_INGREDIENT_URL, mergedIngredients).then(function(){
          $state.go('search');
        });
    };




  });
