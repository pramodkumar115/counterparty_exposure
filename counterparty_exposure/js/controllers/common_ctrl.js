app.controller('CommonCtrl', function($scope, $location){
    $location.path("/");
    console.log("Hello");
    $scope.clicked ='cpRisk';

    $scope.setClicked = function(clicked){
        $scope.clicked = clicked;
        console.log($scope.clicked);
    }
})