"use strict";


function noteService() {
    
   var getNotes = function() {
    var notes = localStorage.getItem("notes");
    return notes ? JSON.parse(notes) : []; 
   }
   
   var updateNotes = function(noteList) {
       noteList ? localStorage.setItem("notes", JSON.stringify(noteList)) : [];
   }
}

angular.module("notesApp").factory(noteService, noteService)