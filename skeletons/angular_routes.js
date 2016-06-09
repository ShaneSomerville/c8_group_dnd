/**
 * Created by somer on 6/8/2016.
 */
var app=angular.module('gameApp', ['ngRoute']);
app.config(function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl:'templates/main_menu.html'
        })
        .when('/new_game', {
            templateUrl:'templates/new_game.html'
        })
        .when('/char_creation', {
            templateUrl:'templates/char_creation.html'
        })
        .when('/intro', {
            templateUrl:'templates/intro_base.html'
        })
        .when('/start_area', {
            templateUrl:'templates/start_area.html'
        })
        // .when('/', {
        //     templateUrl:'templates/main_menu.html'
        // })
        // .when('/', {
        //     templateUrl:'templates/main_menu.html'
        // })
        // .when('/', {
        //     templateUrl:'templates/main_menu.html'
        // })
});