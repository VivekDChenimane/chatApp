var app = angular.module('chatApp', ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: 'templates/login.html',
            controller: 'controlLogin'
        })
        .state('register', {
            url: '/register',
            templateUrl: 'templates/register.html',
            controller: 'controlRegister'
        })

    $urlRouterProvider.otherwise('/login');


});