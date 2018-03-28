app.controller('ConfigCtrl', function ($scope) {
    console.log("Config Controller");
    $scope.selected = "configMgmt";
    $scope.selectedConfig = {};
    $scope.addNew = false;
    $scope.selectedConfiguration = function (item) {
        $scope.selectedConfig = item;
        $scope.addNew = false;
    }

    $scope.addNewCofig = function(){
        $scope.selectedConfig = {};
        $scope.addNew = true;
        $scope.selectedConfig.newsSourceDetails = [];
        $scope.selectedConfig.riskOfficersContact = [];
        console.log($scope.selectedConfig);
    }

    $scope.removeNewsSource = function(item){
        var index = -1;
        for(var i in $scope.selectedConfig.newsSourceDetails){
            var news = $scope.selectedConfig.newsSourceDetails[i];
            if(news.newsSource = item.newsSource){
                index = i;
                break;
            }
        }
        if(index != -1){
            $scope.selectedConfig.newsSourceDetails.splice(index, 1);
        }
    }
    $scope.addNewsSource = function(){
        if($scope.selectedConfig.newsSourceDetails == undefined){
            $scope.selectedConfig.newsSourceDetails = [];
        }
        $scope.selectedConfig.newsSourceDetails.push({});
    }

    $scope.removeContact = function(item){
        var index = -1;
        for(var i in $scope.selectedConfig.riskOfficersContact){
            var news = $scope.selectedConfig.riskOfficersContact[i];
            if(news.riskOfficer = item.riskOfficer){
                index = i;
                break;
            }
        }
        if(index != -1){
            $scope.selectedConfig.riskOfficersContact.splice(index, 1);
        }
    }

    $scope.addContact = function(){
        
        if($scope.selectedConfig.riskOfficersContact == undefined){
            $scope.selectedConfig.riskOfficersContact = [];
        }
        $scope.selectedConfig.riskOfficersContact.push({});
    }

    $scope.details = [{
        counterparty: "GLO Airlines",
        frequency: "5 mins",
        threshold: "80",
        newsSource: "BBC, Fortune, Alabama, The Washington Post, The Economic Times",
        riskOfficers: "Barry Allen, George Lucas, Sebastien Vallon",
        newsSourceDetails: [
            {
                "newsSource": "BBC",
                "wtOfSource": 10,
                "website": "www.bbc.com"
            },
            {
                "newsSource": "Fortune",
                "wtOfSource": 9,
                "website": "wwww.fortune.com"
            },
            {
                "newsSource": "Alabama",
                "wtOfSource": "NA",
                "website": "www.alabama.com"
            },
            {
                "newsSource": "The Washington Post",
                "wtOfSource": 8,
                "website": "www.washingtonpost.com"
            },
            {
                "newsSource": "The Economic Times",
                "wtOfSource": "NA",
                "website": "www.economictimes.com"
            }
        ],
        riskOfficersContact: [
            {
                "riskOfficer": "Barry Allen",
                "email": "Barry@gsib.com",
                "contactNumber": 8745345
            },
            {
                "riskOfficer": "George Lucas",
                "email": "GeorgeLucas@gsib.com",
                "contactNumber": 3456787
            },
            {
                "riskOfficer": "Sebastien Vallon",
                "email": "Seb@gsib.com",
                "contactNumber": 1232156
            }
        ]
    }, {
        counterparty: "Singapore Airlines",
        frequency: "15 mins",
        threshold: "20",
        newsSource: "BBC, Fortune, Alabama, Rueters, The Washington Post",
        riskOfficers: "Ben Osmow, Gianna Hud, Florian Kirn",
        newsSourceDetails: [
            {
                "newsSource": "BBC",
                "wtOfSource": 10,
                "website": "www.bbc.com"
            },
            {
                "newsSource": "Fortune",
                "wtOfSource": 9,
                "website": "wwww.fortune.com"
            },
            {
                "newsSource": "Alabama",
                "wtOfSource": "NA",
                "website": "www.alabama.com"
            },
            {
                "newsSource": "Reuters",
                "wtOfSource": 8,
                "website": "www.reuters.com"
            },
            {
                "newsSource": "The Washington Post",
                "wtOfSource": 8,
                "website": "www.washingtonpost.com"
            }
        ],
        riskOfficersContact: [
            {
                "riskOfficer": "Ben Osmow",
                "email": "Ben@gsib.com",
                "contactNumber": 8745345
            },
            {
                "riskOfficer": "Gianna Hud",
                "email": "Gin@gsib.com",
                "contactNumber": 3456787
            },
            {
                "riskOfficer": "Florian Kirn",
                "email": "Flo@gsib.com",
                "contactNumber": 1232156
            }
        ]
    }, {
        counterparty: "Malaysia Airlines",
        frequency: "25 mins",
        threshold: "30",
        newsSource: "BBC, Fortune, Rueters, The Washington Post",
        riskOfficers: "Tony Steven, James Franco, Robert Amell",
        newsSourceDetails: [
            {
                "newsSource": "BBC",
                "wtOfSource": 10,
                "website": "www.bbc.com"
            },
            {
                "newsSource": "Fortune",
                "wtOfSource": 9,
                "website": "wwww.fortune.com"
            },
            {
                "newsSource": "Reuters",
                "wtOfSource": 8,
                "website": "www.reuters.com"
            },
            {
                "newsSource": "The Washington Post",
                "wtOfSource": 8,
                "website": "www.washingtonpost.com"
            }
        ],
        riskOfficersContact: [
            {
                "riskOfficer": "Tony Steven",
                "email": "tony@gsib.com",
                "contactNumber": 8745345
            },
            {
                "riskOfficer": "James Franco",
                "email": "james@gsib.com",
                "contactNumber": 3456787
            },
            {
                "riskOfficer": "Robert Amell",
                "email": "Robert@gsib.com",
                "contactNumber": 1232156
            }
        ]
    }, {
        counterparty: "Apple CO",
        frequency: "10 mins",
        threshold: "60",
        newsSource: "Alabama, Rueters, The Washington Post, The Economic Times",
        riskOfficers: "Peter Parker, Bruce Baner, Florian Kirn",
        newsSourceDetails: [
            {
                "newsSource": "Alabama",
                "wtOfSource": "NA",
                "website": "www.alabama.com"
            },
            {
                "newsSource": "Reuters",
                "wtOfSource": 8,
                "website": "www.reuters.com"
            },
            {
                "newsSource": "The Washington Post",
                "wtOfSource": 8,
                "website": "www.washingtonpost.com"
            },
            {
                "newsSource": "The Economic Times",
                "wtOfSource": "NA",
                "website": "www.economictimes.com"
            }
        ],
        riskOfficersContact: [
            {
                "riskOfficer": "Peter Parker",
                "email": "peter@gsib.com",
                "contactNumber": 8745345
            },
            {
                "riskOfficer": "Bruce Baner",
                "email": "bruce@gsib.com",
                "contactNumber": 3456787
            },
            {
                "riskOfficer": "Florian Kirn",
                "email": "Flo@gsib.com",
                "contactNumber": 1232156
            }
        ]
    }];
})