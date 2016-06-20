angular.module('happyBellyApp', ['ionic', 'ng-token-auth'])


.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($authProvider, $stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
     url: "/app",
     templateUrl: "views/menu.html",
     controller: 'UserController'
    })

    .state('sign_up', {
      url: '/sign_up',
      views: {
      'menuContent': {
        templateUrl: 'views/sign_up.html',
        controller: 'UserController'
        }
      }
    })

    .state('sign_in', {
      url: '/sign_in',
      views: {
      'menuContent': {
        templateUrl: 'views/sign_in.html',
        controller: 'UserController'
        }
      }
    })

    .state('search', {
      url: '/',
      templateUrl: 'views/search.html'
    })

    .state('product_info', {
      url: '/product_info',
      templateUrl: 'views/product_info.html'
    })

    .state('user_profile', {
      url: '/user_profile',
      views: {
      'menuContent': {
        templateUrl: 'views/user_profile.html'
      }
    }
  });

  $urlRouterProvider.otherwise('/');

  $authProvider.configure({
      apiUrl: 'http://localhost:3000'
  });

});
