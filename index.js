var app = angular.module('mainApp', ['pascalprecht.translate']);

app.config(function	($translateProvider){
	$translateProvider.translations('ru', {
		"TITLE1": 'Наука должна быть весёлая,',
		"TITLE2": 'увлекательная и простая.',
		"TITLE3": 'Таковыми же должны',
		"TITLE4": 'быть и ученые',
		"AUTHOR": 'Петр Капица',
		"PRIVET": 'Приветственное слово',
		"BIO": 'Биография',
		"MEDAL": 'Награды и поощрения',
		"TESTIMONIALS": 'Цитаты',
		"VIDEO": 'Видео',
		"NETWORK": 'Общественная деятельность',
		"CERTIFICATE": 'Сертификаты',
		"PHOTO": 'Фото',
		"IDEAS": 'Иное творчество',
		"RESEARCH": 'Научные труды',
		"NEWSPAPER": 'Научные статьи',
		"MEDIA": 'Публикации в СМИ',
		"CONTACTS": 'Контактные данные',
		"ADDRESS_TITLE": 'Мы находимся',
		"ADDRESS_CITY": 'г. Тараз',
		"ADDRESS": 'ул. Т.Акбозов, 27',
		"MAIL": 'Свяжитесь с нами по почте',
		"SOCIAL": 'Подписывайтесь в соц.сетях'
	})

	$translateProvider.translations('kz', {
		"TITLE1": ' "Қол жазуды ермек ет, жатпа бекер,',
		"TITLE2": 'Бұл көңілсіз дүниеден көп жыл өтер.',
		"TITLE3": 'Өзі қысқа, өзі асау, тентек өмір,',
		"TITLE4": 'Арттағыға бір белгі қойса нетер?"',
		"AUTHOR": 'Абай',
		"PRIVET": 'Сәлемсөз',
		"BIO": 'Өмірбаян',
		"MEDAL": 'Марапаттар',
		"TESTIMONIALS": 'Цитаталар',
		"VIDEO": 'Видеолар',
		"NETWORK": 'Қоғамдық қызмет',
		"CERTIFICATE": 'Сертификаттар мен дипломдар',
		"PHOTO": 'Фотолар',
		"IDEAS": 'Өзге шығармашылық',
		"RESEARCH": 'Ғылыми еңбектер',
		"NEWSPAPER": 'Ғылыми мақалалар',
		"MEDIA": 'БАҚ-тағы жариялымдар',
		"CONTACTS": 'Кері байланыс',
		"ADDRESS_TITLE": 'Біздің мекен-жайымыз',
		"ADDRESS_CITY": 'Тараз қаласы',
		"ADDRESS": 'Т.Акбозов көшесі, 27',
		"MAIL": 'Пошта арқылы хабарласыңыз',
		"SOCIAL": 'Желілер арқылы хабарласыңыз'
	})

	$translateProvider.preferredLanguage('ru');
})

app.controller('navCtrl', function($scope, $translate) {
	$scope.ruLang = $translate.use('ru').$$state.value
	console.log($scope.ruLang)

	$scope.langList = [
					{id: 1, name: 'Русский', code: 'ru'},
					{id: 2, name: 'Қазақша', code: 'kz'}
				]

	$scope.changeLang = function(key) {
		if (key == 'ru') {
			$scope.ruLang = key;
		}
		console.log(key)
		$translate.use(key)
		// $translate.use(key.code)
	}
})