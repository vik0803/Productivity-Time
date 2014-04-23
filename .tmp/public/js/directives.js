app.directive("taskwrapper", function(){

  return {
    restrict: "A",
    taskdata: taskdata,
    template: "/templates/directives/taskwrapper.html",

    link: function(scope, element, attrs){

      console.log('Heres the task data that made it into the directive!');
      console.log(JSON.stringify(taskdata, null, 4));

    }
  };
});