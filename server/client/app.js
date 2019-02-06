var app = angular.module('chatApp', ['ui.router','btford.socket-io']);

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
        .state('dashboard', {
            url: '/dashboard',
            templateUrl: 'templates/dashboard.html',
            controller: ''
        })
    $urlRouterProvider.otherwise('/login');

    app.service('SocketService', ['socketFactory', function SocketService(socketFactory) {
        return socketFactory({
            ioSocket: io.connect('http://localhost:3000')
    });
}]);
});