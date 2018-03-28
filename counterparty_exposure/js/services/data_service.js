app.service("DataService", function($http){
    this.getCPRiskData = function(){
        return $http.get("jsons/cp.json").then(function(res){
            return res.data;
        })
    }

    this.getCollateralData = function(){
        return $http.get("jsons/collateral.json").then(function(res){
            return res.data;
        })
    }
})