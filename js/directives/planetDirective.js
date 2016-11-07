angular.module('starWars').directive('planetDirective', function() {
  return {
    restrict: 'AE',
    templateUrl: 'js/directives/planetDirective.html',
    link: function(scope, element, attributes) {
      //console.log(scope.planet);
      console.log(element);
      if (!scope.planet.residents[0]) {
        //console.log(element);
        element[0].children[0].style.color = '#E55121';
      }
    }
  };

});
