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
            templateUrl: 'views/1.html'
        }).
        when('/2', {
            templateUrl: 'views/2.html'
        })
        /*when('/', {
            templateUrl: 'panel.html',
            controller: 'AdminPanelCtrl'
        }).
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