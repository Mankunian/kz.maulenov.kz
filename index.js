var app = angular.module('mainApp', ['pascalprecht.translate']);


app.config(function	($translateProvider){

	
	$translateProvider.translations('ru', {
		"TITLE1": 'Наука должна быть весёлая,',
		"TITLE2": 'увлекательная и простая.',
		"TITLE3": 'Таковыми же должны',
		"TITLE4": 'быть и ученые',
		"AUTHOR": 'Петр Капица (советский физик)',
		"PRIVET": 'Приветственное слово',
		"BIO": 'Биография',
		"MEDAL": 'Награды и поощрения',
		"TESTIMONIALS": 'Цитаты',
		"VIDEO": 'Видео',
		"NETWORK": 'Общественная деятельность',
		"CERTIFICATE": 'Сертификаты и дипломы',
		"PHOTO": 'Фото',
		"IDEAS": 'Иное творчество',
		"RESEARCH": 'Научные труды',
		"NEWSPAPER": 'Научные статьи',
		"MEDIA": 'Публикации в СМИ',
		"CONTACTS": 'Контактные данные.',
		"ADDRESS_TITLE": 'Мы находимся',
		"ADDRESS_CITY": 'г. Тараз',
		"ADDRESS": 'ул. Т.Акбозов, 27',
		"MAIL": 'Свяжитесь с нами по почте',
		"SOCIAL": 'Подписывайтесь в соц.сетях',
		"CHANGE_LANG": 'Смена языка',
		"KZ_LANG": 'Казахский',
		"RU_LANG": 'Русский',
		"GREETING_TEXT": 'Друзья! Я рад приветствовать вас на моем персональном сайте!	Основная цель открытия данного сайта – это доведение до широкого круга читателей о моих научных изысканий.Планирую также размещать на данном сайте мои интервью, публикации в СМИ.Будет на сайте и информация личностного характера.Всем добро пожаловать на сайт.',
		"JUDGE": 'Судья / Кандидат юридических наук '
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
		"SOCIAL": 'Желілер арқылы хабарласыңыз',
		"CHANGE_LANG": 'Тілді ауыстыру',
		"KZ_LANG": 'Қазақша',
		"RU_LANG": 'Орысша',
		"GREETING_TEXT": 'Құрметті оқырман! Мені жеке сайтыма қош келіпсіздер! Бұл сайты ашудағы негізгі мақсатым - өзімнің ғылыми ізденістеріммен көпшілікті таныстыру.Сайтта сонымен қатар БАҚ-тағы жариялымдарымды, сұқбатарымды, өзге де өзіме қатысты ақпараттарды жариялап отырсам деймін.Сайт контенттімен танысар оқырман қарасы қалың болады деген үміттемін.Құрметпен,  Думан Мәуленов',
		"JUDGE": 'Судья / Заң кандидаты'
	})

	$translateProvider.preferredLanguage('ru');
})

app.controller('navCtrl', function($scope, $translate) {
	$scope.ruLang = $translate.use('ru').$$state.value
	console.log($scope.ruLang)

	$scope.changeLang = function(key) {
		$scope.langName = key;
		console.log(key)
		$translate.use(key)		
	}
})

app.controller('pageCtrl', function($scope, $translate) {
	$scope.ruLang = $translate.use('ru').$$state.value
	console.log($scope.ruLang)

	$scope.changeLang = function(key) {


		$scope.langName = key;
		console.log(key)
		$translate.use(key)		
	}
})