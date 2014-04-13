app.config(function($routeProvider, $locationProvider) {

  $routeProvider

  .when("/tasks", {
    templateUrl: '/assets/templates/changePassword.html',
    controller: 'changePasswordController',
    resolve: {
      "recover": function($http, $route, $rootScope){
        return $http.get($rootScope.api_url + "/ForgotPassword?resetKey=" + $route.current.params.recover)
        .then(function(successResponse){
          return successResponse;
        }, function(errorResponse){
          return $location.path('/logout');
        });
      }
    }
  })
  .when("/login", {
    templateUrl: '/assets/templates/tasksList.html',
    controller: 'authLoginController'
  })

  .when("/logout", {
    templateUrl: '/assets/templates/logout.html',
    controller: 'authLogoutController'
  })

  .when("/404", {
    templateUrl: '/assets/templates/404.html'
  });

  $locationProvider.html5Mode(false);

});