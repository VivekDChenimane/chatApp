app.controller('controlRegister', function ($scope, serviceRegister) {
    $scope.registerUser = function () {
        console.log("register");
        var user = {
            'firstname': $scope.firstname,
            'lastname': $scope.lastname,
            'email': $scope.email,
            'password': $scope.password
        }
        console.log("register dat on controller: ", user);
        serviceRegister.registerUser(user, $scope);
    } 
});