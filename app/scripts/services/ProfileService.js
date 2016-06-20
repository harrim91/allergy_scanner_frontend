angular.module('happyBellyApp')
  .service('ProfileService', ['$http', 'ProfileFactory', function($http, ProfileFactory){

    var self = this;
    var url = 'http://localhost:3000/user_ingredients';

    self.getDefaultProfiles = function(apiUrl) {
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

    self.create = function(userId, ingredients){
        var thing = _newFactory(userId, ingredients);
        return _sendObject(url, thing)
        .then(function(response){
          console.log(response);
        });
  };

  function _newFactory(userId, ingredients){
    return new ProfileFactory(userId, ingredients);
  }

  function _sendObject(url, object){
    return $http.post(url, object);
  }

  }]);
