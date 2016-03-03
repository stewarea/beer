function beer(a) {
  text = "";
  for (i = a; i > 0 ; i--)
  {
    text += i + " bottles of beer on the wall " + i  + " bottles of beer.  You take one down, pass it around " + (i-1) + " bottles of beer on the wall." + "<br>";
  }
  return text;
}

$(document).ready(function() {
  $("form#beer").submit(function(event) {
    var a = parseInt($("input#number").val());
    var result = beer(a);

    $("#beerdisplay").html(result);

    $("#result").show();

    event.preventDefault();

  });
});
