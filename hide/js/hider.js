$(document).ready(function () {

  /*
    Currently, this code hides the paragraphs (p elements) when you click on the h1.
    Look for the jQuery function you can use to *switch* between showing and hiding the paragraphs
    http://api.jquery.com
  */
  $("h1").click(function () {
    $("p").toggle();
  });

});
