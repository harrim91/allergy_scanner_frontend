angular.module('happyBellyApp')
  .controller('UserController', function(UserService, $scope, $auth, $state, $rootScope){

    var self = this;

    $scope.handleRegBtnClick = function() {
      $auth.submitRegistration($scope.registrationForm)
        .then(function() {
          validateUser();
          $state.go('diet_profiles');
        })
        .catch(function(resp) {
        console.log(resp);
        });
    };

    $scope.handleLoginBtnClick = function(loginForm) {
      $auth.submitLogin(loginForm)
        .then(function() {
          validateUser();
          $state.go('search');
        })
        .catch(function(resp) {
          console.log(resp);
        });
    };

    $scope.handleSignOutBtnClick = function() {
      //this isn't working properly - setting the CurrentUser to null manually, but it's hacky and I don't like it.
      UserService.setCurrentUserID(null);
      $auth.signOut().then(function() {
        validateUser();
        $state.go('sign_in');

      });
    };

    function validateUser() {
      $auth.validateUser().then(function(response) {
        if(response.signedIn) {
          UserService.setCurrentUserID(response.id);
        }
      });
    }

    $rootScope.$on('auth:login-success', function(ev, user) {
      $scope.user = user;
    });

    $scope.$on('devise:new-registration', function (e, user){
     $scope.user = user;
    });

    $scope.$on('devise:login', function (e, user){
     $scope.user = user;
    });

  });
