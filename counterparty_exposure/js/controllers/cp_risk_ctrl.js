app.controller('CounterpartyRiskCtrl', function($scope, DataService){
    console.log("CounterpartyRiskCtrl Controller");
    $scope.data = [];
    DataService.getCPRiskData().then(function(res){
        console.log(res);
        $scope.data = res.data;
    })
})