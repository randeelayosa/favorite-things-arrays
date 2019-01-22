$(document).ready(function() {
  $("form.favorites").submit(function(event) {
    var colorInput = $("input#color").val();
    var flavorInput = $("input#flavor").val();
    var seasonInput = $("input#season").val();
    var personInput = $("input#person").val();
    var favoriteArray = [colorInput, flavorInput, seasonInput, personInput];
    var reverseArray = favoriteArray.reverse();

    console.log(reverseArray);

    $(".color").text(colorInput);
    $(".flavor").text(flavorInput);
    $(".season").text(seasonInput);
    $(".person").text(personInput);






    // $("#userInput").show();

    event.preventDefault();
  });
});
