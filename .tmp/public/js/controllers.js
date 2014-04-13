productivityTime.controller('tasksController', function($scope, $rootScope){

});

productivityTime.controller('authLoginController', function($scope, $rootScope){

  $scope.email_signin = "";
  $scope.password_signin = "";

  angular.element(document.querySelector('#login')).on('click', function(){
    console.log(JSON.stringify($scope.email_signin, null, 4));
    console.log(JSON.stringify($scope.password_signin, null, 4));
  });

});

productivityTime.controller('authLogoutController', function($scope, $rootScope){

});