/*
  Here we're declaring a variable, *handleInputKeypress* to store a function!
  This function is going to be associated with a textarea element
  with the id #inputText via jQuery's $() selector syntax.

  But first, we are simply defining what we will want to happen when
  the user presses keys on the keyboard.
*/
var handleInputChange = function(event) {
  var inputValue = $("#inputText")./* FIXME */;

  var htmlString = "<p>" + inputValue + "</p>";

  $('#outputHTML').html(/* FIXME */);
}


/*
  Here we're declaring a variable, *whenTheDocumentIsReady* to store a function!
  This function will use jQuery's helper function to react to the button being clicked
  and run our function that handles input changes.
*/
var whenTheDocumentIsReady = function () {
  $('#inputButton').click(/* FIXME */)
}


$(document)./* FIXME */(whenTheDocumentIsReady);
