//search controller

(function() {
    'use strict';

    angular
        .module('movieApp')
        .controller('searchController', searchController);

    //injecting movie factory to search controller
    searchController.$inject = ['movieFactory'];

    function searchController(movieFactory) {
        var vm = this;
        vm.inputResults = function(movies) {
            movieFactory.getMovie(movies).then(
                function(data) {
                    //first array from search
                    vm.theMovie = data;
                    console.log(data);
                },
                function(error) {});

        };

        
    }

})();
