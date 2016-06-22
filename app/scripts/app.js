angular.module('happyBellyApp', ['ionic', 'ng-token-auth', 'ngCordova'])

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

  .state('home', {
    url: '/',
    views: {
    'menuContent': {
      templateUrl: 'views/home.html',
      controller: 'UserSessionController'
      }
    }
  })

    .state('sign_up', {
      url: '/sign_up',
      views: {
      'menuContent': {
        templateUrl: 'views/sign_up.html',
        controller: 'UserSessionController'
        }
      }
    })

    .state('sign_in', {
      url: '/sign_in',
      views: {
      'menuContent': {
        templateUrl: 'views/sign_in.html',
        controller: 'UserSessionController'
        }
      }
    })

    .state('search', {
      url: '/search',
      views: {
      'menuContent': {
        templateUrl: 'views/search.html',
        controller: 'SearchController'
        }
      }
    })

    .state('product_info', {
      url: '/product_info',
      views: {
      'menuContent': {
        templateUrl: 'views/product_info.html',
        controller: 'FoodProductController'
        }
      }
    })

    .state('diet_profiles', {
      url: '/diet_profiles',
      views: {
      'menuContent': {
        templateUrl: 'views/diet_profiles.html',
        controller: 'DietProfileController'
        }
      }
    })

    .state('user_profile', {
      url: '/user_profile',
      views: {
      'menuContent': {
        templateUrl: 'views/user_profile.html'
        // controller: 'UserProfileController'
      }
    }
  });


  $urlRouterProvider.otherwise('/');

  $authProvider.configure({
    apiUrl: 'http://happy-belly-api.herokuapp.com/'
  });

});
