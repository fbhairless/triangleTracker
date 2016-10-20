$(function() {
  $("#blanks form").submit(function(event) {
    var leg1 = parseInt($("input#leg1").val());
    var leg2 = parseInt($("input#leg2").val());
    var leg3 = parseInt($("input#leg3").val());

    if (leg1 + leg2 <= leg3 || leg1 + leg3 <= leg2 || leg2 + leg3 <= leg1) {
      alert("NOT a triangle!!");
    }
    else if (leg1 === leg2 && leg1 === leg3  {
      alert("Equilateral");
    }
    else if (leg1 === leg2 && leg1 != leg3) ||  {
      alert("Scalene Triangle");
    }



    event.preventDefault();
  })



});
