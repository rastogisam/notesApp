"use strict";


function noteService() {

   var getNotes = function() {
    var notes = localStorage.getItem("notes");
    return notes ? JSON.parse(notes) : [];
   }

   var updateNotes = function(noteList) {
       noteList ? localStorage.setItem("notes", JSON.stringify(noteList)) : [];
   }

   return {
     getNotes: getNotes,
     updateNotes: updateNotes
   }
}

angular.module("notesApp").factory("noteService", noteService);
