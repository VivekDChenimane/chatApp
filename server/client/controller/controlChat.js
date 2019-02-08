app.controller('controlChat', function ($scope, SocketService, $state, serviceChat, $location) {
    $scope.message = '';
    $scope.allUserArr = [];
    $scope.currUserName = localStorage.getItem('name');
    $scope.currUser = localStorage.getItem('userid');
    $scope.recieverUserName = localStorage.getItem('rusername');

    SocketService.on('newMessageSingle', message => {
       
            console.log('message in client side', message);
                $scope.allUserArr.push(message);
                $scope.message=message;
   
    })
    $scope.sendMsg = function () {
    
        msg='hello'; 
        $scope.message = '';
        console.log("Emitting the message");
        SocketService.emit('createMessage', msg);
    }
    $scope.logout = function(){
        localStorage.clear();
        $state.go('login');
    }
  
});