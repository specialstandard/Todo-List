app.controller('MainCtrl', function($scope, filterFilter, $window){
  $scope.tasks = [
    {task:"Don't forget to buy milk", selected: false}
    ];
  $scope.addItem = function(){
    if($scope.taskIn!== ""){
      $scope.tasks.push({task:$scope.taskIn, selected:false });
      $scope.taskIn = "";
      // Store
localStorage.setItem("todolist", JSON.stringify($scope.tasks));
      //$window.localStorage['todolist'] = $scope.tasks;
    }
  };
  $scope.removeCompleted = function(){
    $scope.tasks = filterFilter($scope.tasks, function(task){
      return !task.selected;
    })
  };
});
