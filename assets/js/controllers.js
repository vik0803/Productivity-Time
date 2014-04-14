productivityTime.controller('tasksController', function($scope, $rootScope){

});

productivityTime.controller('authLoginController', function($scope, $rootScope, $http){

  $scope.email_signin = "";
  $scope.password_signin = "";

  $scope.processLogin = function(){

    var data = {
      email: $scope.email_signin,
      password: $scope.password_signin
    };

    $http.post('/processLogin', data)
    .success(function(data, status, headers, config){
      console.log('Success happened!');
      console.log(JSON.stringify(data, null, 4));
    })
    .error(function(data, status, headers, config){
      console.log('Error happened!');
      console.log(data);
      $rootScope.applicationError = data;
    });
  };

});

productivityTime.controller('authLogoutController', function($scope, $rootScope){

});