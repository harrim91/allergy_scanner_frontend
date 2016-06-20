angular.module('happyBellyApp')
  .controller('DietProfileController', function(ProfileService, $scope, $auth){

    var self = this;
    var API_URL = 'http://happy-belly-api.herokuapp.com/diet_profiles';

    var chosenIngredients = [];

    self.defaultProfiles = getDefaultProfiles();

    $scope.selectedProfiles = {};

    function currentUser() {
      $auth.validateUser().then(function(response) {
        return response.id;
      });
    }

    currentUser();

    function getDefaultProfiles() {
      ProfileService.getDefaultProfiles(API_URL).then(function(response) {
        self.defaultProfiles = response;
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
        ProfileService.create(currentUser(), mergedIngredients);
    };


  });
