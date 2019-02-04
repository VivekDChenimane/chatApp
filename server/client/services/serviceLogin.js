app.service('serviceLogin', function ($http, $location) {
    this.login = function (data, $scope) {
        $http({
            method: 'POST',
            url: 'http://localhost:3000/login',
            data: data,
        }).then(
            function successCallback(response) {
                console.log("Login successfull ");
                $location.path('dashboard');
                $scope.loginMessage = "login successfull";
            },
            function errorCallback(response) {
                console.log("register Unsuccessfull ");
                console.log(response);
                $scope.loginMessage = 'EmailId or Password Incorrect';
            }
        );
    }
    });