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
      "tasks": function($http, $rootScope, $location){
        return $http.get("http://localhost:1337/findTasksByUser")
        .then(function(successResponse){
          return successResponse.data;
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