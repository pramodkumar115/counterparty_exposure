app.controller('CollateralDetailsCtrl', function($scope, DataService){
    console.log("Collateral Details Controller");
    $scope.data = [];
    DataService.getCollateralData().then(function(res){
        console.log(res);
        $scope.data = res.data;
    })
})