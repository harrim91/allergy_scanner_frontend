angular.module('happyBellyApp')
  .controller('UserController', function($scope, $auth, $state){

    var self = this;


    $scope.handleRegBtnClick = function() {
      $auth.submitRegistration($scope.registrationForm)
        .then(function(resp) {
          self.currentUser = true;
          console.log(self.currentUser);
          console.log('Should be true');
         $state.go('search');
        })
        .catch(function(resp) {
        console.log(resp);
        self.currentUser = false;
        });
    };

    $scope.handleLoginBtnClick = function(loginForm) {
      $auth.submitLogin(loginForm)
        .then(function(resp) {
          console.log('logged in');
          $state.go('search');
        })
        .catch(function(resp) {
          console.log(resp);
        });
    };

    self.userCheck = function() {
      console.log(self.currentUser);
    };

    // function findUser() {
    //   $auth.validateUser().then(function(resp) {
    //     self.currentUser = resp.signedIn;
    //   });
    // }
  });
