var myApp = angular.module('crudApp', ['ui.router']);

myApp.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
    $stateProvider
        //new state added for merchant param        
        .state('home', {
            url: '/',
            templateUrl: 'views/home.html',
            controller: 'homeCtrl'
        });
});