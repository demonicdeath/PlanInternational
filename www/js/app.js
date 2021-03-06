// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
//angular.module('starter', ['ionic', 'ngMockE2E'])
angular.module('starter', ['ionic','ionic-datepicker'])
// bower install angular-mocks --save
// <script src="lib/angular-mocks/angular-mocks.js"></script>
// https://docs.angularjs.org/api/ngMockE2E
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'LoginCtrl'
  })
  
  .state('main', {
    url: '/',
    abstract: true,
    templateUrl: 'templates/main.html'
  })
  
  .state('main.dash', {
    url: 'main/dash',
    views: {
        'dash-tab': {
          templateUrl: 'templates/dashboard.html',
          controller: 'donorInfoCtrl'
        }
    }
  })

.state('main.donorConfirm', {
    url: 'main/donorConfirm',
    views: {
        'dash-tab': {
          templateUrl: 'templates/donorConfirm.html',
          controller: 'confirmCtrl'
        }
    }
  })

.state('main.final', {
    url: 'main/final',
    views: {
        'dash-tab': {
          templateUrl: 'templates/final.html',
          controller: 'confirmCtrl'
        }
    }
  })

.state('main.donateAmount', {
    url: 'main/donateAmount',
    views: {
        'dash-tab': {
          templateUrl: 'templates/donateAmount.html',
          controller: 'amountCtrl'
        }
    }
  });
   
  $urlRouterProvider.otherwise('/main/dash');
})

/*
.run(function($httpBackend){

  $httpBackend.whenPOST('http://localhost:8100/saveDonorInfo').respond(function(method, url, data){
    console.log('Received these data:', method, url, data);
    return [200, {}, {}];    
  });*/

 // $httpBackend.whenGET(/templates\/\w+.*/).passThrough();
// })

/*
.run(function($rootScope){
    $rootScope.dateValue = new Date();
    //$rootScope.timeValue = new Date();
    //$rootScope.datetimeValue = new Date();

    var numberOfDaysToSubtract = 365*18;
    $rootScope.datetimeValue = $rootScope.datetimeValue.setDate($rootScope.dateValue - numberOfDaysToAdd); 
    
   
})*/

.run(function ($rootScope, $state, AuthService, AUTH_EVENTS) {
  $rootScope.$on('$stateChangeStart', function (event,next, nextParams) {

    if (!AuthService.isAuthenticated()) {
      if (next.name !== 'login') {
        event.preventDefault();
        $state.go('login');
      }
    }
  });
});
