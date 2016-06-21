angular.module('happyBellyApp')
  .service('UserService', [function() {

    var self = this;

    self.currentUserID = null;
    self.setCurrentUserID = setCurrentUserID;

    function setCurrentUserID(id) {
      self.currentUserID = id;
    }

}]);
