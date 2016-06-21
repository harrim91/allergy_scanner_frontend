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

    self.create = function(apiUrl, userId, ingredients){
      var dietProfile = _newDietProfile(userId, ingredients);
      return _sendObject(apiUrl, dietProfile)
      .then(function(response){
        console.log(response);
      });
    };

    function _newDietProfile(userId, ingredients){
      return new DietProfileFactory(userId, ingredients);
    }

    function _sendObject(url, object){
      return $http.post(url, object);
    }

  }]);
