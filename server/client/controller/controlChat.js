app.controller('controlChat', function ($scope, SocketService, $state, serviceChat, $location) {
    $scope.message = '';
    $scope.allUserArr = [];
    $scope.currUserName = localStorage.getItem('name');
    $scope.currUser = localStorage.getItem('userid');
    $scope.recieverUserName = localStorage.getItem('rusername');
    var token = localStorage.getItem("token");
    console.log(token);
    if (token === null) {
        console.log("helw");
        $state.go('login');
    }
    SocketService.on('newMessageSingle', (message) => {
        if (localStorage.getItem('userid') == message.senderUserId || (localStorage.getItem('userid') == message.recieverUserId && localStorage.getItem('ruserId') == message.senderUserId)) {
            if ($scope.allUserArr === undefined) {
                $scope.allUserArr = message;
            } else {
                $scope.allUserArr.push(message);
            }
        }
    })
    $scope.getAllUsers = function () {
        console.log("called");
        serviceChat.getAllUsers($scope,token);
    }
    $scope.getAllUsers();
    //select person from list
    $scope.person = function (userData) {
        $scope.allUserArr = '';

        localStorage.setItem('rusername', userData.firstname);
        localStorage.setItem('ruserId', userData._id);
        $scope.recieverUserName = localStorage.getItem('rusername');
        $scope.getUserMsg();
        // $location.path('/singleChat');
    }
    //get all message
    $scope.getUserMsg = function () {
        console.log("i am called");
        serviceChat.getUserMsg($scope);
        //msgArr= $scope.allUserArr;
    }
    $scope.sendMsg = function () {
        var msg = {
            'senderUserId': localStorage.getItem('userid'),
            'senderName': localStorage.getItem('name'),
            'recieverUserId': localStorage.getItem('ruserId'),
            'recieverName': localStorage.getItem('rusername'),
            'message': $scope.message
        };
        $scope.message = '';
        SocketService.emit('createMessage', msg);
    }
    $scope.logout = function () {
        localStorage.clear();
        $state.go('login')
    }
});