angular.module('happyBellyApp')
  .service('ProfileService', ['$http', function($http){

    var self = this;

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
      console.log(response)
      return response;
    }
  }]);
