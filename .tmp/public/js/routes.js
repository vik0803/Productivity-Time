productivityTime.config(function($routeProvider, $locationProvider) {

  $routeProvider

  .when('/', {
    templateUrl: '/templates/tasks.html',
    controller: 'tasksController'
  })

  .when("/tasks", {
    templateUrl: '/templates/tasks.html',
    controller: 'tasksController',
    resolve: {
      "recover": function($http, $route, $rootScope){
        return $http.get("/someURL" + $route.current.params.thing)
        .then(function(successResponse){
          return successResponse;
        }, function(errorResponse){
          return $location.path('/404');
        });
      }
    }
  })

  .when("/login", {
    templateUrl: '/templates/login.html',
    controller: 'authLoginController'
  })

  .when("/logout", {
    templateUrl: '/templates/login.html',
    controller: 'authLogoutController'
  })

  .when("/404", {
    templateUrl: '/templates/404.html'
  })

  .otherwise({
    redirectTo: '/404'
  });

  $locationProvider.html5Mode(false);

});