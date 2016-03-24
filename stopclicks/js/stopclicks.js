$(document).ready(function () {

  /*
    The goal here is to stop default action when you click a link
    (going to another page), and instead create a new element as
    a string and append it to the article element(s).
  */
  $("a").click(function (event) {
    event./* FIXME */
    var anchor = $(this).attr(/* FIXME */);
    var elementAsString = "<p>" + /* FIXME */ + "</p>";
    $('article').append(elementAsString);
  });

});
