var app = function() {
    'use strict';

    var myApp = angular.module('homeModule', ['ui.router']);



    myApp.config(function($stateProvider, $urlRouterProvider) {
        var aboutState = {
            name: 'about',
            url: '/about',
            templateUrl: '/views/about/about.html'
        }

        var blahState = {
            name: 'highScores',
            url: '/highScores',
            template: '<img src="/images/IMG_3444.JPG" class="barceLonaImage"/>'
        }
        $urlRouterProvider.when('', '/about');

        $stateProvider.state(aboutState);
        $stateProvider.state(blahState);
    });



    myApp.controller('homeController', HomeController );

    function HomeController($http) {
        var self = this;
        self.value = 'test';
        self.createRoom = createRoom;
        function createRoom() {
            var params = {
                TableName: "Rifts",
                Item: {
                    "longitude": 122345,
                    "latitude": 567817,
                    "health": 999922
                }
            };
            $http.post('/api/new/',params);
        }


    }
}();