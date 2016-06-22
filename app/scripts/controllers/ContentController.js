angular.module('happyBellyApp')
.controller('ContentController', function($scope, $ionicScrollDelegate) {
$scope.toggleLeft = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };
});
