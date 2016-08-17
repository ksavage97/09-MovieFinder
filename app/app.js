(function() {
	'use strict';

	angular
		.module('movieApp', ['ui.router'])
		.config(function($urlRouterProvider, $stateProvider) {

			$urlRouterProvider.otherwise('/search');

			$stateProvider
				.state('search', {
					url: '/search',
					templateUrl: '/app/search/search.html',
					controller: 'searchController as search'
				})

				.state('detail', {
					url: '/detail',
					templateUrl: 'app/detail/detail.html',
					controller: 'DetailController as detail'
				});
		});
		

})();