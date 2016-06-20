angular.module('happyBellyApp')
  .controller('DietProfileController', function(ProfileService, $scope){

    var self = this;
    var API_URL = 'http://happy-belly-api.herokuapp.com/diet_profiles';

    var chosenIngredients = [];
    var mergedIngredients = [];
    var finalIngredients = [];

    self.defaultProfiles = getDefaultProfiles();

    $scope.selectedProfiles = {};

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
        mergedIngredients = [].concat.apply([], chosenIngredients);
        extractIds();
    };

    function extractIds() {
      mergedIngredients.map(function(obj) {finalIngredients.push(obj.id);});
      ProfileService.create(finalIngredients);
    }

  });
