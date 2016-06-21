angular.module('happyBellyApp')
  .service('DietProfileService', ['$http', 'DietProfileFactory', function($http, DietProfileFactory){

    var self = this;

    self.getDietProfiles = function(apiUrl) {
      return _getDatafromApi(apiUrl)
        .then(function(response) {
          return _handleResponse(response.data);
        });
    };

    function _getDatafromApi(apiUrl){
      return $http.get(apiUrl);
    }

    function _handleResponse(response) {
      return response;
    }

    self.create = function(apiUrl, ingredients){
      var dietProfile = _newDietProfile(ingredients);
      return _sendObject(apiUrl, dietProfile)
      .then(function(response){
        console.log(response);
      });
    };

    function _newDietProfile(ingredients){
      return new DietProfileFactory(ingredients);
    }

    function _sendObject(url, object){
      return $http.post(url, object);
    }

  }]);
