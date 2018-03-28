app.config(function($routeProvider){
    $routeProvider
    .when('/cprisk',{
        templateUrl: 'views/counterparty_risk.html',
        controller: 'CounterpartyRiskCtrl'
    })
    .when('/config',{
        templateUrl: 'views/config.html',
        controller: 'ConfigCtrl'
    })
    .when('/collateral',{
        templateUrl: 'views/collateral_details.html',
        controller: 'CollateralDetailsCtrl'
    })
    .otherwise({redirectTo: '/cprisk' })
})