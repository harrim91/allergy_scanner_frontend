angular.module('happyBellyApp')
  .controller('UserController', function($scope, $auth, $state, $ionicSideMenuDelegate){
    $scope.handleRegBtnClick = function() {
      $auth.submitRegistration($scope.registrationForm)
        .then(function(resp) {
         $state.go('search');
        })
        .catch(function(resp) {
        console.log(resp);
        });
    };

    $scope.toggleLeft = function() {
        $ionicSideMenuDelegate.toggleLeft();
      };

  });
