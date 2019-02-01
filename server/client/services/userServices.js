app.service('userService', function ($http, $location) {

    this.registerUser = function (data, $scope) {
        $http({
            method: 'POST',
            url: 'http://localhost:3000/register',
            data: data 

        }).then(
            function successCallback(response) {
                console.log("register successfull ");
                console.log(response);
                $scope.message = "register successfull";
                $location.path('/login');

            },
            function errorCallback(response) {

                console.log("register Unsuccessfull ");
             $scope.message =response.data.message.message;


            }
        );
}
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