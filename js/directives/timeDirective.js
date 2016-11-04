angular.module('starWars').directive('showTime', function(){
  return {
    restrict: 'E',
    template: '{{ time | date: "MMM d, y h:mm:ss a"}}',
    link: function(scope, element, attrs) {
      scope.currentTime = new Date();
      scope.time = scope.currentTime;
    }
};
});
