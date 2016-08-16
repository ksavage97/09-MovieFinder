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
            getMovie: getMovie
        };

        return service;

        function getMovie(movie) {
            var deferred = $q.defer();

            //communicating with the api
            $http.get('http://www.omdbapi.com/?' + movie).then(
                function(response) {
                    deferred.resolve(response.data);
                },
                function(err) {
                    deferred.reject(err);
                }
            );

            //returns the array
            return deferred.promise;
        }

    }
})();