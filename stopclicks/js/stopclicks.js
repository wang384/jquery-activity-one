$(document).ready(function () {

  /*
    The goal here is to stop default action when you click a link
    (going to another page), and instead
  */
  $("a").click(function (event) {
    event.preventDefault();
    var anchor = $(this).attr('href');
    var elementAsString = "<p>" + anchor + "</p>";
    $('article').append(elementAsString);
  });

});
