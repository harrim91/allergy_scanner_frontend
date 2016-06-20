angular.module('happyBellyApp')
  .controller('ProfileController', function(ProfileService){

    var self = this;
    var API_URL = 'http://happy-belly-api.herokuapp.com/diet_profiles';

    self.defaultProfiles = getDefaultProfiles();

    function getDefaultProfiles() {
      ProfileService.getDefaultProfiles(API_URL).then(function(response) {
        self.defaultProfiles = response;
      });
    }
  });
