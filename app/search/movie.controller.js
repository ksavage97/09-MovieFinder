//controller

(function() {
    'use strict';

    angular
        .module('movieApp')
        .controller('movieController', movieController);

    movieController.$inject = ['movieFactory'];

    function movieController(movieFactory) {
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