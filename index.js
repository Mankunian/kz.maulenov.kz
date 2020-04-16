// angular.module('mainApp', ['pascalprecht.translate'])
// 	app
// 	.controller('navCtrl', function($scope, $window, $location) {
// 		$scope.langList = [
// 			{id: 1, name: 'Русский'},
// 			{id: 2, name: 'Қазақша'}
// 		]

// 		$scope.update = function(lang){
// 			console.log(lang)
// 			if (lang.id === 2) {
// 				$window.$location.href = '/ideas.html'
// 			}
// 		}
// 	})
var app = angular.module('mainApp', ['pascalprecht.translate']);

app.config(function	($translateProvider){
	$translateProvider.translations('ru', {
		"TITLE": 'Наука должна быть весёлая, увлекательная и простая. Таковыми же должны быть и ученые'
	})

	$translateProvider.translations('kz', {
		"TITLE": 'Қол жазуды ермек ет, жатпа бекер, бұл көңілсіз дүниеден көп жыл отер.'
	})

	$translateProvider.preferredLanguage('ru');
})

app.controller('navCtrl', function($scope, $translate) {

	$scope.langList = [
					{id: 1, name: 'Русский', code: 'ru'},
					{id: 2, name: 'Қазақша', code: 'kz'}
				]

	$scope.changeLang = function(key) {
		console.log(key)
		$translate.use(key.code)
	}
})