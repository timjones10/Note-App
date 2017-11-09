(function(exports) {
function noteControllerisInstantiated() {
  var controller = new NoteController();
  assert.isTrue(controller !== undefined);
}

noteControllerisInstantiated();

})(this);

function appContainsHTML() {
  notelist = new Notelist();
  notelist.addNoteModel("Test1");
  notelistview = new NoteListView(notelist);
  var mock_div = document.getElementById("div");
  controller = new NoteController(notelist);
  assert.isTrue(controller.insertHTML(notelistview, mock_div) == );
}

appContainsHTML();
