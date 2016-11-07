angular.module('starWars').controller('planetsCtrl', function($scope, $stateParams, mainService){

  $scope.currentPage = 1;
  $scope.maxPages = 7;

  $scope.getPlanets = function() {
    mainService.getPlanets($scope.currentPage).then(function(planets) {
      $scope.planets = planets;
    });
  };

  $scope.getPlanets();

$scope.prev = function(){
  if($scope.currentPage > 1){
    $scope.currentPage--;
    $scope.getPlanets();
  }
};

$scope.next = function(){
  console.log($scope.currentPage);
  if($scope.currentPage < $scope.maxPages){
    $scope.currentPage++;
    $scope.getPlanets();
  }
};


});
