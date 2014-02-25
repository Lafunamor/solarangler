var app = angular.module('app', ['ngRoute'])

app.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        controller:'ctrl',
    })
    .otherwise({
        redirectTo:'/'
    });
})

app.controller('ctrl', ['$scope', '$element','$timeout', function($scope, $element) {
    // Set initial image src
    $scope.sun_image     = 'http://solarangler.com/img/sun.png';
    $scope.mercury_image = 'http://solarangler.com/img/mercury.png';
    $scope.venus_image   = 'http://solarangler.com/img/venus.png';
    $scope.moon_image    = 'http://solarangler.com/img/moon.png';
    $scope.earth_image   = 'http://solarangler.com/img/earth.png';
    $scope.mars_image    = 'http://solarangler.com/img/mars.png';
    $scope.jupiter_image = 'http://solarangler.com/img/jupiter.png';
    $scope.saturn_image  = 'http://solarangler.com/img/saturn.png';
    $scope.uranus_image  = 'http://solarangler.com/img/uranus.png';
    $scope.neptune_image = 'http://solarangler.com/img/neptune.png';
    $scope.pluto_image   = 'http://solarangler.com/img/pluto.png';
    $scope.exp_btn_src   = 'http://solarangler.com/img/chem-icon.png';
    // Capture button click to update button image src
    $scope.exp_click = function() {
        if(this.exp_btn_src == 'http://solarangler.com/img/chem-icon.png'){
            this.exp_btn_src = 'http://solarangler.com/img/chem-icon-light.png';
        } else {
            this.exp_btn_src = 'http://solarangler.com/img/chem-icon.png';
        }
    }
}]);

