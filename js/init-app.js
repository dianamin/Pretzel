var app = angular.module('app', ['ui.bootstrap', 'ngRoute']).filter('to_trusted', ['$sce', function($sce){
    return function(text) {
        return $sce.trustAsHtml(text);
    };
}]);

app.filter('array', function() {
    return function(items) {
        var filtered = [];
        angular.forEach(items, function(item) {
        filtered.push(item);
        });
        return filtered;
    };
});

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
        when('/', {
            templateUrl: 'views/home.html',
            controller: 'GeneralSurveysCtrl'
        }).
        when('/create-survey', {
            templateUrl: 'views/create-survey.html',
            controller: 'NewSurveyCtrl'
        }).
        when('/takeSurvey/:surveyId', {
            templateUrl: 'views/take-survey.html',
            controller: 'TakeSurveyCtrl'
        }).
        when('/register', {
            templateUrl: 'views/register.html',
            controller: 'CreateAccountCtrl'
        }).
        when('/login', {
            templateUrl: 'views/login.html',
            controller: 'EnterAccountCtrl'
        }).
        when('/my-account', {
            templateUrl: 'views/my-account.html',
            controller: 'MyAccountCtrl'
        }).
        when('/my-surveys', {
            templateUrl: 'views/my-surveys.html',
            controller: 'MySurveysCtrl'
        }).
        when('/statistics/:surveyId', {
            templateUrl: 'views/statistics.html',
            controller: 'StatisticsCtrl'
        }).
        when('/top-users', {
            templateUrl: 'views/top-users.html',
            controller: 'TopUsersCtrl'
        })
        /*when('/', {
            templateUrl: 'panel.html',
            controller: 'AdminPanelCtrl'
        }).
        when('/edit/:lessonId', {
            templateUrl: 'edit.html',
            controller: 'EditPageCtrl'
        })
        when('/lessons', {
            templateUrl: 'list.html',
            controller: 'AdminListCtrl'
        }).
        when('/edit/:lessonId', {
            templateUrl: 'edit.html',
            controller: 'EditPageCtrl'
        }).
        when('/create', {
            templateUrl: 'create.html',
            controller: 'CreatePageCtrl'
        }).
        when('/reports', {
            templateUrl: 'reports.html',
            controller: 'ReportedEssaysCtrl'
        }).
        when('/symbols', {
            templateUrl: 'symbols.html',
            controller: 'SymbolsCtrl'
        }).
        when('/questions', {
            templateUrl: 'questions.html',
            controller: 'QuestionsCtrl'
        }).
        otherwise({
            redirectTo: 'panel.html',
            controller: 'AdminPanelCtrl'
        })*/
    }
]);