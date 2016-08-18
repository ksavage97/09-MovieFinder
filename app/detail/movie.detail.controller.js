//detail controller

(function() {
    'use strict';

    angular
        .module('movieApp')
        .controller('detailController', detailController);

    //injecting factory and stateparams to detail controller
    detailController.$inject = ['movieFactory', '$stateParams'];

    function detailController(movieFactory, $stateParams) {
        var vm = this;
        //storing the stateparams id as a variable to call in factory (api round 2)
        vm.currentMovieID = $stateParams.movieId;

        //getting further movie details; passing the movieID into the factory
        movieFactory.getDetail($stateParams.movieId).then(
            function(data) {
                vm.movieDetails = data;
                console.log(data);
            },
            function(error) {});
    }

})();
