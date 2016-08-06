"use strict";

function listController($scope, noteService) {
     this.notes = noteService.getNotes();
}


angular.module("notesApp").controller("listController", listController);
