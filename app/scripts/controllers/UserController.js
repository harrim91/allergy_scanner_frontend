angular.module('happyBellyApp')
  .controller('UserController', function($scope, $auth, $state){

    var self = this;
    findUser();


    $scope.handleRegBtnClick = function() {
      $auth.submitRegistration($scope.registrationForm)
        .then(function(resp) {
          findUser();
          $state.go('search');
        })
        .catch(function(resp) {
        console.log(resp);
        });
    };

    $scope.handleLoginBtnClick = function(loginForm) {
      $auth.submitLogin(loginForm)
        .then(function(resp) {
          findUser();
          $state.go('search');
        })
        .catch(function(resp) {
          console.log(resp);
        });
    };

    $scope.handleSignOutBtnClick = function() {
      $auth.signOut().then(function(resp) {
        $state.go('sign_in');
        findUser();
        console.log(self.currentUser);
      });
    };

    function findUser() {
      $auth.validateUser().then(function(resp) {
        self.currentUser = resp.signedIn;
        console.log(resp);
      });
    }
  });
