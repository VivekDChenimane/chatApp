app.service('serviceLogin', function ($http, $location) {
    this.login = function (data, $scope) {
        $http({
            method: 'POST',
            url: 'http://localhost:3000/login',
            data: data,
        }).then(
            function successCallback(response) {
                console.log("Login successfull ");
                console.log(response);
                var id=response.data.message._id;
                var name=response.data.message.firstname;
                var token = response.data.token;
                console.log('id is ',id);
                localStorage.setItem('userid',id);
                localStorage.setItem('name',name);
                localStorage.setItem("token",token);
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