//controller

(function() {
    'use strict';

    angular
        .module('movieApp')
        .controller('searchController', searchController);

    searchController.$inject = ['movieFactory'];

    function searchController(movieFactory) {
        var vm = this;
        vm.inputResults = function(movies) {
            movieFactory.getMovie(movies).then(
                function(data) {
                    vm.theMovie = data;
                    console.log(data);
                },
                function(error) {});

        };

    }

})();
