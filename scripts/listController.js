"use strict";

function listController($scope, noteService) {
     var vm = this;
     vm.notes = noteService.getNotes();
}