productivityTime.controller('tasksController', function($scope, $rootScope){

});

productivityTime.controller('authLoginController', function($scope, $rootScope, $http){

  $scope.email_signin = "";
  $scope.password_signin = "";

  $scope.email_signup = "";
  $scope.password_signup = "";
  $scope.password_signup_confirmation = "";

  $scope.processLogin = function(){

    if ( $scope.email_signin.length <= 0 ) {
      return $rootScope.applicationError = "Please enter an email.";
    } else if ( $scope.password_signin.length <= 0 ) {
      return $rootScope.applicationError = "Please enter your password.";
    }

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

  $scope.processSignup = function(){
    if ( $scope.password_signup === $scope.password_signup_confirmation ) {
      var data = {
        email: $scope.email_signup,
        password: $scope.password_signup
      };

      $http.post('/processSignup', data)
      .success(function(data, status, headers, config){
        console.log('Success happened!');
        console.log(JSON.stringify(data, null, 4));
      })
      .error(function(data, status, headers, config){
        console.log('Error happened!');
        console.log(data);
        $rootScope.applicationError = data;
      });
    } else {
      $rootScope.applicationError = "Passwords don't match!";
    }
  };

});

productivityTime.controller('authLogoutController', function($scope, $rootScope){

});