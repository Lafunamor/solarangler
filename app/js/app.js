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

app.controller('ctrl', ['$scope', '$element','$timeout', function($scope, $element, $timeout) {
    $scope.sun_image     = 'img/sun.png';
    $scope.mercury_image = 'img/mercury.png';
    $scope.venus_image   = 'img/venus.png';
    $scope.moon_image    = 'img/moon.png';
    $scope.earth_image   = 'img/earth.png';
    $scope.mars_image    = 'img/mars.png';
    $scope.jupiter_image = 'img/jupiter.png';
    $scope.saturn_image  = 'img/saturn.png';
    $scope.uranus_image  = 'img/uranus.png';
    $scope.neptune_image = 'img/neptune.png';
    $scope.pluto_image   = 'img/pluto.png';
}]);

