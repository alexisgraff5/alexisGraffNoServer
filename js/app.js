angular.module('starWars', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home',{
      url:'/',
      templateUrl: "../views/about.html"
    }).state('planets',{
      url:'/planets',
      templateUrl: 'views/planets.html',
      controller: 'planetsCtrl'
    }).state('people',{
      url: '/people',
      templateUrl: 'views/people.html',
      controller: 'peopleCtrl'
    });
    $urlRouterProvider.otherwise('/');
});
