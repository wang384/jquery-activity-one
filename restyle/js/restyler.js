$(document).ready(function () {
  var switchOn;
  var crimson = "#7D110C";
  var cream = "#E1D8B7"

/*
  Find the areas marked FIXME and change them so the script works!
*/


  // http://api.jquery.com/click/
  $("p").click(function () {
    /*
      We want to use a value to represent on/off.
      "if" lets us check a condition (in the parentheses after the "if" keyword)
      and execute the code inside the { } if the conditional expression is true
      "else" provides a way for us to do something else when
      the conditional expression is *not* true.
      https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
    */
    if ( /* FIXME */) {
      // http://api.jquery.com/css/
      $("body").css("background-color", crimson);
      switchOn = /* FIXME */;
    } else {
      $("body").css("background-color", cream);
      switchOn =  /* FIXME */;
    }
  });
});
