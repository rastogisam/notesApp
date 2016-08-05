"use strict";

var app = angular.module("notesApp", ["ui.router"])

app.config(["$stateProvider","$urlRouterProvider",config]);

function config($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/list");
  $stateProvider
    .state('list', {
      url: "/list",
      templateUrl: "views/list.html",
      controller: "listController as list"
    })
    .state('note', {
      url: "/note",
      templateUrl: "views/note.html",
      controller: "noteController as note"
    })
}
    
