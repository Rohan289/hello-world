var app=angular.module('mainAPP',[]);
app.directive('firstDirective',function()
{
  function linkedFunction($scope,element,attributes)
  {
    $scope.text="Hi , there!";
    $scope.changetext=function(newText)
    {
      $scope.text=newText;
    }

  }
  return{
    link:linkedFunction,
    template : '<span ng-click="changetext(\'Welcome\')">Current Text : {{text}}</span>',
    restrict : 'A'

  };
});
app.controller('myController' function()
{

});
