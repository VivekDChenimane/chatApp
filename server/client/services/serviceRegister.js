app.service('serviceRegister', function ($http, $location) {

    this.registerUser = function (data, $scope) {
        $http({
            method: 'POST',
            url: 'http://localhost:3000/registration',
            data: data 

        }).then(
            function successCallback(response) {
                console.log("register successfull ");
                console.log(response);
                $scope.message = "register successfull";
                $location.path('/login');

            },
            function errorCallback(response) {
                 
                console.log("register Unsuccessfull " , response);
             //$scope.message =response.data.message.message;


            }
        );
}
});