angular.module('happyBellyApp')
  .service('UserProfileService', function($http) {

    var self = this;

    self.setCurrentUserID = setCurrentUserID;
    self.currentUserID = null;

    function setCurrentUserID(id) {
      self.currentUserID = id;
    }

    self.getUserIngredients = function(apiUrl) {
      return _getDatafromApi(apiUrl)
        .then(function(response) {
          return setUserIngredients(response.data);
        });
    };

    function _getDatafromApi(apiUrl){
      return $http.get(apiUrl);
    }

    function _handleResponse(response) {
      return response;
    }

    function setUserIngredients(objArray) {
      self.userIngredients = [];
      objArray.forEach(function(obj) {
        self.userIngredients.push(obj.name);
      })
      return self.userIngredients;
    }

});
