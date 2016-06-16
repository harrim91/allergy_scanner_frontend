angular.module('happyBellyApp')
  .controller('UserController', function($scope, $auth){
    $scope.handleRegBtnClick = function() {
      console.log("hi") 
      $auth.submitRegistration($scope.registrationForm)
        .then(function(resp) {
        console.log("success")
        })
        .catch(function(resp) {
        console.log("fail")
        });
    };

  });