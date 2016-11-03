angular.module('starWars', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home',{
      url:'/',
      templateUrl: "../views/about.html"
    }).state('planets',{
      url:'/planets',
      templateUrl: 'views/planets.html'
    }).state('people',{
      url: '/people',
      templateUrl: 'views/people.html'
    });
    $urlRouterProvider.otherwise('/');
});
