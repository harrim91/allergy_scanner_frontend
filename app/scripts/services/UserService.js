angular.module('happyBellyApp')
  .service('UserService', function($http) {

    var self = this;

    self.setCurrentUserID = setCurrentUserID;
    self.currentUserID = null;

    function setCurrentUserID(id) {
      self.currentUserID = id;
    }

    self.getUserIngredients = function(apiUrl) {
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

});
