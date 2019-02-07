app.controller('controlChat', function ($scope, SocketService, $state, serviceChat, $location) {
    $scope.message = '';
    $scope.allUserArr = [];
    $scope.currUserName = localStorage.getItem('name');
    $scope.currUser = localStorage.getItem('userid');
    $scope.recieverUserName = localStorage.getItem('rusername');

    SocketService.on('newMessageSingle', (message) => {
       
            console.log('message in client sidee', message);
                $scope.allUserArr.push(message);
   
    })
    $scope.sendMsg = function () {
    
        msg='hello';
        $scope.message = '';
        SocketService.emit('createMessage', msg);
    }
  
});