//controller

(function() {
    'use strict';

    angular
        .module('movieApp')
        .controller('detailController', detailController);

    detailController.$inject = ['movieFactory', '$stateParams'];

    function detailController(movieFactory, $stateParams) {
        var vm = this;
        vm.currentMovieID = $stateParams.movieId;

        movieFactory.getDetail($stateParams.movieId).then(
            function(data) {
                vm.movieDetails = data;
                console.log(data);
            },
            function(error) {});
    }

})();
