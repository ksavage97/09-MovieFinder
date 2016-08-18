//app

(function() {
	'use strict';

	angular
		.module('movieApp', ['ui.router'])
		.config(function($urlRouterProvider, $stateProvider) {

			//serving as default
			$urlRouterProvider.otherwise('/search');

			$stateProvider
				//page 1 - search
				.state('search', {
					url: '/search',
					templateUrl: '/app/search/search.html',
					controller: 'searchController as search'
				})

				//page 2 - detail
				.state('detail', {
					//this url has state param included
					url: '/detail?movieId',
					templateUrl: 'app/detail/detail.html',
					controller: 'detailController as detail'
				});
		});
		

})();