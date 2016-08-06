"use strict";

function noteController($scope, noteService) {
  var vm = this;

  vm.createNote = function(note) {
    noteService.updateNotes([note]);
  }
}


angular.module("notesApp").controller("noteController", noteController);
