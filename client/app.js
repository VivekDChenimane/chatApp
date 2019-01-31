var app = angular.module('chatApp', ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider.state('login', {
            url: '/login',
            templateUrl: 'templates/login.html',
        })
    $urlRouterProvider.otherwise('/login');


});