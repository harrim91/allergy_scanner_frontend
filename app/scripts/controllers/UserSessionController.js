angular.module('happyBellyApp')
  .controller('UserSessionController', function(UserProfileService, $scope, $auth, $state, $rootScope){

    var self = this;
    var USER_INGREDIENT_URL = 'http://happy-belly-api.herokuapp.com/users/'+ $rootScope.user.id +'/ingredients';

    $scope.handleRegBtnClick = function() {
      $auth.submitRegistration($scope.registrationForm)
        .then(function(response) {
          validateUser('diet_profiles');
        })
        .catch(function(resp) {
        console.log(resp);
        });
    };

    $scope.handleLoginBtnClick = function(loginForm) {
      $auth.submitLogin(loginForm)
        .then(function() {
          validateUser('search');
        })
        .catch(function(resp) {
          console.log(resp);
        });
    };

    $scope.handleSignOutBtnClick = function() {
      //this isn't working properly - setting the CurrentUser to null manually, but it's hacky and I don't like it.
      UserProfileService.setCurrentUserID(null);
      $auth.signOut().then(function() {
        validateUser('sign_in');

      });
    };

    function validateUser(state) {
      $auth.validateUser().then(function(response) {
        if(response.signedIn) {
          UserProfileService.setCurrentUserID(response.id);
          $state.go(state);
        } else {
          UserProfileService.setCurrentUserID(null);
          $state.go('sign_in');
        }
      });
    }

    $rootScope.$on('auth:login-success', function(ev, user) {
      $rootScope.user = user;
    });

    $rootScope.$on('devise:new-registration', function (e, user){
     $rootScope.user = user;
    });

    $rootScope.$on('devise:login', function (e, user){
     $rootScope.user = user;
    });

  });
