angular.module('starWars').controller('peopleCtrl', function($scope, $stateParams, mainService){

  $scope.currentPage = 1;
  $scope.maxPages = 9;

  // $scope.getPeople = function() {
  //   mainService.getPeople($scope.currentPage).then(function(people) {
  //     $scope.people = people;
  //     // console.log($scope.people);
  //   });
  // };

//  $scope.getPeople();

  $scope.getPeople = function() {
    mainService.getPeople($scope.currentPage).then(function(people){
      $scope.worlds = people;
      $scope.people = people[0];
      // console.log($scope.worlds);
      // console.log($scope.people);
    });
  };

  $scope.getPeople();

$scope.prev = function(){
  if($scope.currentPage > 1){
    $scope.currentPage--;
    $scope.getPeople();
  }
};

$scope.next = function(){
  console.log($scope.currentPage);
  if($scope.currentPage < $scope.maxPages){
    $scope.currentPage++;
    $scope.getPeople();
  }
};



});
