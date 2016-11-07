angular.module('starWars').service('mainService', function($http, $q) {

    this.getPlanets = function(pageNum) {
        return $http({
            method: 'GET',
            url: 'https://swapi.co/api/planets/?page=' + pageNum
        }).then(function(response) {
            return response.data.results;
        });
    };

    // this.getPeople = function(pageNum) {
    //     return $http({
    //         method: 'GET',
    //         url: 'http://swapi.co/api/people/?page=' + pageNum
    //     }).then(function(response) {
    //         return response.data.results;
    //     });
    // };

    this.getPeople = function(pageNum) {
        var defer = $q.defer();
        var myArr = [];
        $http({
            method: 'GET',
            url: 'https://swapi.co/api/people/?page=' + pageNum
        }).then(function(response) {
            var people = response.data.results;
           console.log(people);
            for (let i = 0; i < people.length; i++) {
                $http({
                    method: 'GET',
                    url: people[i].homeworld
                    //url: 'https://swapi.co/api/planets/' + (i + 1)
                }).then(function(response) {
                    var secondaryResponse = response.data.name;
                  //  console.log(secondaryResponse);
                    people[i].homeWorldData = secondaryResponse;
                });
            }
          //  console.log(people);
            defer.resolve(people);
        });
        return defer.promise;
    };

});
