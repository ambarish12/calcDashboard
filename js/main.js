var app = angular.module('dashboardApp', []);

app.controller("dashboardCtrl", function ($scope, $http) {

    $scope.subCategories = [
        { "label": "c11", "value": 0, "category": "traditional", "label2": "c112", "value2": 40 },
        { "label": "c12", "value": 0, "category": "traditional", "label2": "c122", "value2": 10 },
        { "label": "c13", "value": 0, "category": "traditional", "label2": "c132", "value2": 20 },
        { "label": "c14", "value": 0, "category": "traditional", "label2": "c142", "value2": 30 },
        { "label": "c21", "value": 0, "category": "digital", "label2": "c212", "value2": 30 },
        { "label": "c22", "value": 0, "category": "digital", "label2": "c222", "value2": 30 },
        { "label": "c23", "value": 0, "category": "digital", "label2": "c232", "value2": 30 }
    ];

    $scope.catOptions = [
        { "label": "no", "value": 0 },
        { "label": "min", "value": 70 },
        { "label": "max", "value": 150 },
        { "label": "hundred", "value": 100 },
        { "label": "rb", "value": 120 }
    ];

    $scope.weeks = ["week1", "week2", "week3", "week4"];

    $scope.cats = ["traditional", "digital", "hispanic"];

    $scope.selectFilter = function (key) {
        switch (key) {
            case 4:
                $scope.weeks = ["week1", "week2", "week3", "week4"];
                break;
            case 8:
                $scope.weeks = ["week1", "week2", "week3", "week4", "week5", "week6", "week7", "week8"];
                break;
            case 12:
                $scope.weeks = ["week1", "week2", "week3", "week4", "week5", "week6", "week7", "week8", "week9", "week10", "week11", "week12"];
                break;
            case 16:
                $scope.weeks = ["week1", "week2", "week3", "week4", "week5", "week6", "week7", "week8", "week9", "week10", "week11", "week12", "week13", "week14", "week15", "week16"];
                break;
            default:
                break;
        }
    }
    $scope.validateCategoryInput = function () {
        // check individual values as well

        if ($scope.traditional + $scope.digital + $scope.hispanic > 100 || $scope.traditional + $scope.digital + $scope.hispanic <= 0) {
            $scope.categoryValidator = 'value exceeds 100!'
            return 'error';
        }
        else {
            $scope.categoryValidator = '';
            return '';
        }
    }
    //sample code for getting data from an API
    $http.get('https://www.w3schools.com/angular/customers.php')
        .then(function (res) {
            console.log(res.data.records);
        })
        .catch(function (err) {
            console.log(err);
        })

});