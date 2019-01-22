$(document).ready(function() {
  $("form.favorites").submit(function(event) {
    var colorInput = $("input#color").val();
    var flavorInput = $("input#flavor").val();
    var seasonInput = $("input#season").val();
    var personInput = $("input#person").val();
    var favoriteArray = [colorInput, flavorInput, seasonInput, personInput];
    var reverseArray = favoriteArray.reverse();
    var numberArray = [reverseArray[1], reverseArray[0], reverseArray[2]];
    var pushArray = reverseArray.concat(numberArray);




    console.log(reverseArray[0]);

    $(".color").text(colorInput);
    $(".flavor").text(flavorInput);
    $(".season").text(seasonInput);
    $(".person").text(personInput);
    $(".array").text(pushArray);
    $(".array1").text(pushArray[0]);
    $(".array2").text(pushArray[1]);
    $(".array3").text(pushArray[2]);
    $(".array4").text(pushArray[3]);









    // $("#userInput").show();

    event.preventDefault();
  });
});
