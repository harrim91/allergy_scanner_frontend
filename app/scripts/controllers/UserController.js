angular.module('happyBellyApp')
  .controller('UserController', function(UserService, $scope, $auth, $state, $rootScope){

    var self = this;
    var USER_INGREDIENT_URL = 'http://happy-belly-api.herokuapp.com/users/'+ $scope.user.id +'/ingredients';

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
      UserService.setCurrentUserID(null);
      $auth.signOut().then(function() {
        validateUser('sign_in');

      });
    };

    function validateUser(state) {
      $auth.validateUser().then(function(response) {
        console.log(response.signedIn);
        console.log(response.id);
        if(response.signedIn) {
          UserService.setCurrentUserID(response.id);
          $state.go(state);
        } else {
          UserService.setCurrentUserID(null);
          $state.go('sign_in');
        }
        console.log(UserService.currentUserID);
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

    self.userIngredients = getUserIngredients();

    function getUserIngredients() {
      UserService.getUserIngredients(USER_INGREDIENT_URL).then(function(response) {
        self.userIngredients = response;
        console.log(response);
      });
    }

    self.formatIngredients = function(ingredients) {
      return ingredients.map(function(x){
        return x.replace(/\w\S*/g, function(txt) {
          return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
      });
    };

  });
