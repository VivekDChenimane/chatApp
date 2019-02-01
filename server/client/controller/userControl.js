app.controller('userControl', function ($scope, userService) {

    $scope.register = function () {
        var user = {
            'firstname': $scope.firstname,
            'lastname': $scope.lastname,
            'email': $scope.email,
            'password': $scope.password,
           // 'confirmPassword': $scope.confirmPassword

        }
        console.log("register dat on controller: ", user);
            userService.registerUser(user, $scope);
    }

    $scope.login = function () {
        var data = {
            'email': $scope.email,
            'password': $scope.password
        }
        userService.login(data, $scope);
    }

});