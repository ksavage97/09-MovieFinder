//factory

(function() {
    'use strict';

    angular
        .module('movieApp')
        .factory('movieFactory', movieFactory);

    //injecting parameters to the factory
    movieFactory.$inject = ['$http', '$q'];

    function movieFactory($http, $q) {
        var service = {
            getMovie: getMovie,
            getDetail: getDetail
        };

        return service;

        function getMovie(movie) {
            var deferred = $q.defer();

            //communicating with the api round 1 - basic search
            $http.get('http://www.omdbapi.com/?s=' + movie + '&plot=full&r=json').then(
                function(response) {
                    deferred.resolve(response.data);
                },
                function(err) {
                    deferred.reject(err);
                }
            );

            return deferred.promise;
        }


        function getDetail(currentMovieID) {
            var deferred = $q.defer();

            //communicating with the api round 2 - details
            $http.get('http://www.omdbapi.com/?i=' + currentMovieID + '&plot=full&r=json').then(
                function(response) {
                    deferred.resolve(response.data);
                },
                function(err) {
                    deferred.reject(err);
                }
            );

            return deferred.promise;
        }

    }
})();
