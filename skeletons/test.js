/**
 * Created by somer on 6/9/2016.
 */
var app=angular.module('testApp', ['ngRoute']);
app.config(function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl:'test1.html'
        });
    //     .when('/new_game', {
    //         templateUrl:'templates/new_game.html'
    //     })
    //     .when('/char_creation', {
    //         templateUrl:'templates/char_creation.html'
    //     })
    //     .when('/intro', {
    //         templateUrl:'templates/intro.html'
    //     })
    //     .when('/start_area', {
    //         templateUrl:'templates/start_area.html'
    //     })
    //     .when('/settings', {
    //         templateUrl:'templates/settings.html'
    //     })
    // // .when('/', {
    // //     templateUrl:'templates/main_menu.html'
    // // })
    // // .when('/', {
    // //     templateUrl:'templates/main_menu.html'
    // // })
});